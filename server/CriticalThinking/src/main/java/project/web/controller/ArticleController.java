package project.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import project.model.Article;
import project.service.ArticleService;
import project.web.dto.ArticleDTO;
import project.web.dto.CategoryDTO;


@RestController
public class ArticleController {
	
	@Autowired
	ArticleService articleService;
	
	// only 18 published articles for main page
	@GetMapping (value="/api/articles")
	public ResponseEntity <List<ArticleDTO>> getPublishedArticles() {
		List<ArticleDTO>articles = articleService.getPublishedArticles();
		if(articles.size() >=18) {
			return new ResponseEntity<> (articleService.getPublishedArticles().subList(0, 18), HttpStatus.OK);
		} else {
		return new ResponseEntity<> (articleService.getPublishedArticles().subList(0, articles.size()), HttpStatus.OK);
		}
	}
	
	// number of pages per category
	@GetMapping (value = "/api/number/{categoryId}")
	public ResponseEntity <Integer> getNumberOfPagesCategory(@PathVariable Long categoryId) {
		List<ArticleDTO>articles = articleService.getPublishedArticlesByCategory(categoryId);
		Integer x;
		if(articles.size() % 12 !=0) {
			x = articles.size()/12 +1;
			return new ResponseEntity <> (x, HttpStatus.OK);
		} else {
			x= articles.size()/12;
			return new ResponseEntity <> (x, HttpStatus.OK);
		}
	}
	
	//only published articles by category
	@GetMapping (value = "/api/articles/{categoryId}")
	public ResponseEntity <List<ArticleDTO>> getArticlesByCategory(@PathVariable Long categoryId) {
		List<ArticleDTO>articles = articleService.getPublishedArticlesByCategory(categoryId);
		List<ArticleDTO>retVal = new ArrayList<>();
		if (articles.size()==0) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			if(articles.size()>=12) {
				retVal = articles.subList(0, 12);
			} else  {
				retVal = articles.subList(0, articles.size());
			}
			return new ResponseEntity<> (retVal, HttpStatus.OK);
		}
	}
		
	
	// only published articles by category PAGE
	@GetMapping (value = "/api/articles/{categoryId}/page/{pageNumber}")
	public ResponseEntity <List<ArticleDTO>> getArticlesByCategoryPage(@PathVariable Long categoryId, @PathVariable Integer pageNumber) {
		List<ArticleDTO>articles = articleService.getPublishedArticlesByCategory(categoryId);
		List<ArticleDTO>retVal = new ArrayList<>();
		if (pageNumber > 0) {
			if(pageNumber*12 <= articles.size()) {
				retVal = articles.subList((pageNumber-1)*12, pageNumber*12);
				return new ResponseEntity<> (retVal, HttpStatus.OK);
			}else {
				if((pageNumber-1)*12 > articles.size()) {
					return new ResponseEntity<> (HttpStatus.NOT_FOUND);
				}else {
					retVal = articles.subList((pageNumber-1)*12, articles.size());
					return new ResponseEntity<> (retVal, HttpStatus.OK);
				}
			}
		} else {
			return new ResponseEntity<> (HttpStatus.NOT_FOUND);
		}
			
	}
	
	
	//only published article
	@GetMapping (value="/api/article/{id}") 
	public ResponseEntity<ArticleDTO> getOne (@PathVariable Long id) {
		Article article = articleService.getOne(id);
		if(article!=null && article.isPublished()==true) {
			ArticleDTO dto = new ArticleDTO(article);
			return new ResponseEntity<>  (dto, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	
	// all categories
	@GetMapping (value = "/api/categories")
	public ResponseEntity <List<CategoryDTO>> getAllCategories() {
		return new ResponseEntity<>(articleService.getAllCategories(), HttpStatus.OK);
	}
	
	//search by keyword for users
	@GetMapping ("/api/search")
	public ResponseEntity<List<ArticleDTO>> search (@RequestParam String keyWord) {
		if(!articleService.search(keyWord).isEmpty() && keyWord.trim()!="") {
			return new ResponseEntity<> (articleService.search(keyWord), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
