package project.service;

import java.text.Normalizer;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import project.data.ArticleRepository;
import project.data.CategoryRepository;
import project.model.Article;
import project.model.Category;
import project.web.dto.ArticleDTO;
import project.web.dto.CategoryDTO;

@Component
public class ArticleService {

	@Autowired
	ArticleRepository articleRepository;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	public List<ArticleDTO> getAllArticles() {
		List<Article> articles = articleRepository.findAll();
		return convertToDTO(articles);
	}
	
	public List<ArticleDTO> getPublishedArticles() {
		List<Article> articles = articleRepository.findByPublishedTrueOrderByPublicationDateDesc();
		return convertToDTO(articles);
	}
	
	public List<ArticleDTO> getPublishedArticlesByCategory(Long id){
		List<Article> articles = articleRepository.findByPublishedTrueAndCategoryIdOrderByPublicationDateDesc(id);
		return convertToDTO(articles);                                                                                                                                                                                                                                      
	}
	
	public Article getOne(Long id) {
		return articleRepository.findOne(id);
	}
	
	public List<CategoryDTO> getAllCategories() {
		List<Category> categories = categoryRepository.findAll();
		List<CategoryDTO> retVal = categories.stream().map(c -> new CategoryDTO(c)).collect(Collectors.toList());
		return retVal;
	}
	
	public List<ArticleDTO> search(String keyWord) {
		List<Article>articles = articleRepository.findByPublishedTrueOrderByPublicationDateDesc();
		List<Article> selected = new ArrayList<>();
		for (Article a:articles) {
			String cleanText = cleanText(a).toLowerCase();
			String cleanKeyWord = replaceChars(keyWord).toLowerCase();
			if (cleanText.contains(cleanKeyWord)) {
				int start = cleanText.indexOf(cleanKeyWord);
				int end = cleanText.indexOf(cleanKeyWord)+ cleanKeyWord.length();
				if(start>=100 && cleanText.length()-end >=100) {
					String [] arr =a.getText().replaceAll("\\<.*?\\>", "")
							.substring(start-100, end+100)
							.replaceAll(" [^ ]+$", "").split(" ",2);
					a.setDescription("..."+arr[1]+"...");
					selected.add(a);
				} else if(start<100 && cleanText.length()-end>=100) {
					a.setDescription(a.getText().replaceAll("\\<.*?\\>", "")
							.substring(0, end+100 )
							.replaceAll(" [^ ]+$", "") +"...");
					selected.add(a);
				} else if(start>=100 && cleanText.length()-end<100) {
					String [] arr = a.getText().replaceAll("\\<.*?\\>", "").substring(start-100).split(" ",2);
					a.setDescription("..."+arr[1]);
					selected.add(a);
				} else if (start <100 && cleanText.length()-end<100) {
					a.setDescription(a.getText().replaceAll("\\<.*?\\>", "").substring(0));
					selected.add(a);
				}
		}
			else if (!cleanText.contains(cleanKeyWord)) {
				if(replaceChars(a.getTitle().replaceAll("\\<.*?\\>", "")).toLowerCase().contains(cleanKeyWord)) {
				selected.add(a);
				} 
			}
	}	
		return convertToDTO(selected);
	}
	
	
	public List<ArticleDTO> getUnpublishedArticles() {
		List<Article> articles = articleRepository.findByPublishedFalse();
		return convertToDTO(articles);
	}
	
	public boolean checkRequestBody(ArticleDTO article) {
		if(article.getTitle().trim()!="" && article.getMainImage().trim()!="" && article.getCategory().getId()!=null) {
			return true;
		}
		return false;
	}
	
	public List<ArticleDTO> convertToDTO (List<Article> articles) {
		return articles.stream().map(a -> new ArticleDTO(a)).collect(Collectors.toList());
	}
	
	public String cleanText(Article article) {
		return replaceChars(article.getText().replaceAll("\\<.*?\\>", ""));
	}
	
	public static String replaceChars(String word) {
		 String normalized = Normalizer.normalize(word, Normalizer.Form.NFD);
		 String accentRemoved = normalized.replaceAll("\\p{InCombiningDiacriticalMarks}+", "");
		 accentRemoved = accentRemoved.replace("đ", "dj");
		 accentRemoved = accentRemoved.replace("Đ", "DJ");
		 return accentRemoved;
	}
}
