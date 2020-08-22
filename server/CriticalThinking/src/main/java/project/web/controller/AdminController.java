package project.web.controller;

import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.data.ArticleRepository;
import project.data.CategoryRepository;
import project.model.Article;
import project.model.Category;
import project.service.ArticleService;
import project.web.dto.ArticleDTO;

@RestController
public class AdminController {

	@Autowired
	ArticleRepository articleRepository;

	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	ArticleService articleService;
	
	//get all published articles
	@GetMapping (value="/api/admin/articles")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity <List<ArticleDTO>> getPublishedArticles() {
		return new ResponseEntity<> (articleService.getPublishedArticles(), HttpStatus.OK);
	}
	
	//get only unpublished article
	@GetMapping (value="/api/admin/article/{id}") 
	public ResponseEntity<ArticleDTO> getOne (@PathVariable Long id) {
		Article article = articleService.getOne(id);
		if(article!=null && article.isPublished()==false) {
			ArticleDTO dto = new ArticleDTO(article);
			return new ResponseEntity<>  (dto, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	
	//create an article
	@PostMapping (value = "/api/admin/articles")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<ArticleDTO> createArticle(@RequestBody ArticleDTO article) {
		Article newArticle = new Article ();
		if(articleService.checkRequestBody(article)==true) {
			newArticle.setTitle(article.getTitle());
			newArticle.setMainImage(article.getMainImage());
			newArticle.setText(article.getText());
			newArticle.setDescription(article.getDescription());
			Long categoryId = article.getCategory().getId();
			Category category = categoryRepository.findById(categoryId);
			newArticle.setCategory(category);
			newArticle.setWithVideo(article.isWithVideo());
			articleRepository.save(newArticle);
			return new ResponseEntity<>  (new ArticleDTO (newArticle), HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>  (HttpStatus.BAD_REQUEST);
		}
		
	}
	
	//publish an article
	@PutMapping (value = "/api/admin/article/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<ArticleDTO> publish (@PathVariable Long id) {
		Article article = articleService.getOne(id);
		if (article == null) {
			return new ResponseEntity <> (HttpStatus.NOT_FOUND);
		} else {
			article.setPublished(true);
			article.setPublicationDate(new Date());
			articleRepository.save(article);
			return new ResponseEntity <> (new ArticleDTO (article), HttpStatus.OK);
		}
	}
	
	
	//change an unpublished article
	@PutMapping (value = "/api/admin/changearticle/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<ArticleDTO> modify (@PathVariable Long id, @RequestBody ArticleDTO article) {
		Article articleForChange = articleService.getOne(id);
		if (articleForChange != null && articleForChange.isPublished() == false && articleService.checkRequestBody(article) == true) {
			articleForChange.setTitle(article.getTitle());
			articleForChange.setMainImage(article.getMainImage());
			articleForChange.setText(article.getText());
			articleForChange.setDescription(article.getDescription());
			Long categoryId = article.getCategory().getId();
			Category category = categoryRepository.findById(categoryId);
			articleForChange.setCategory(category);
			articleForChange.setWithVideo(article.isWithVideo());
			articleRepository.save(articleForChange);
			return new ResponseEntity <> (new ArticleDTO (articleForChange), HttpStatus.OK);
			
		} else {
			return new ResponseEntity <> (HttpStatus.BAD_REQUEST);
		}
	}
	
		
	//delete an article
	@DeleteMapping (value= "/api/admin/article/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteOne (@PathVariable Long id) {
		Article article = articleService.getOne(id);
		if (article != null) {
			articleRepository.delete(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	
	// only unpublished articles
	@GetMapping (value="/api/unpublishedarticles")
	public ResponseEntity <List<ArticleDTO>> getUnpublishedArticles() {
		return new ResponseEntity<> (articleService.getUnpublishedArticles(), HttpStatus.OK);
	}
}
