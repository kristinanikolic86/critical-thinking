package project.web.dto;

import java.util.Date;


import project.model.Article;

public class ArticleDTO {

	private Long id;
	
	private String title;
	
	private String mainImage;
	
	private String description;
	
	private String text;
	
	private boolean published;
	
	Date publicationDate;
	
	private CategoryDTO category;
	
	private boolean withVideo;

	public ArticleDTO() {
		super();
	}
	
	public ArticleDTO (Article article) {
		this.id = article.getId();
		this.title = article.getTitle();
		this.mainImage = article.getMainImage();
		this.description = article.getDescription();
		this.text = article.getText();
		this.published = article.isPublished();
		this.publicationDate = article.getPublicationDate();
		this.category = new CategoryDTO (article.getCategory());
		this.withVideo = article.isWithVideo();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMainImage() {
		return mainImage;
	}

	public void setMainImage(String mainImage) {
		this.mainImage = mainImage;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public CategoryDTO getCategory() {
		return category;
	}

	public void setCategory(CategoryDTO category) {
		this.category = category;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean published) {
		this.published = published;
	}

	public Date getPublicationDate() {
		return publicationDate;
	}

	public void setPublicationDate(Date publicationDate) {
		this.publicationDate = publicationDate;
	}

	public boolean isWithVideo() {
		return withVideo;
	}

	public void setWithVideo(boolean withVideo) {
		this.withVideo = withVideo;
	}
	
	
	

	
	
	
	
	
}
