package project.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Article {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	@Column(nullable = false)
	private String mainImage;
	
	@Column(length=200)
	private String description;
	
	@Column(length=8192)
	private String text;
	
	private boolean published;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date publicationDate;
	
	@ManyToOne (fetch = FetchType.EAGER)
	private Category category;
	
	private boolean withVideo;

	public Article() {
		super();
	}

	public Article(Long id, String title, String mainImage, String description, String text, boolean published,
			Date publicationDate, Category category, boolean withVideo) {
		super();
		this.id = id;
		this.title = title;
		this.mainImage = mainImage;
		this.description = description;
		this.text = text;
		this.published = published;
		this.publicationDate = publicationDate;
		this.category = category;
		this.withVideo = withVideo;
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


	public String getMainImage() {
		return mainImage;
	}


	public void setMainImage(String mainImage) {
		this.mainImage = mainImage;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
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
