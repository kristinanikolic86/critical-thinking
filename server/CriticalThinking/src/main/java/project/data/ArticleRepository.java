package project.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import project.model.Article;

public interface ArticleRepository extends JpaRepository <Article, Long> {
	
	// for published articles
	public List<Article> findByPublishedTrueOrderByPublicationDateDesc();
	
	// for published articles by category id
	public List<Article> findByPublishedTrueAndCategoryIdOrderByPublicationDateDesc(Long id);

	// for unpublished articles
	public List<Article> findByPublishedFalse();
}
