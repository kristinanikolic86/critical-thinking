export interface ArticleInterface {
  id?:number;
  title?:string;
  mainImage?:string;
  description?:string;
  text?:string;
  category?: Category;
  publicationDate?:Date;
  published?:boolean;
  withVideo?:boolean;
}

export class Article implements ArticleInterface {
  public id?:number;
  public title?:string;
  public mainImage?:string;
  public description?:string;
  public text?:string;
  public category?:Category;
  public publicationDate?:Date;
  public published?:boolean;
  public withVideo?:boolean;


  constructor (a:ArticleInterface) {
    this.id = a.id;
    this.title = a.title;
    this.mainImage = a.mainImage;
    this.description = a.description;
    this.text = a.text;
    this.category = a.category;
    this.publicationDate = a.publicationDate;
    this.published = a.published;
    this.withVideo = a.withVideo;
  }
}

export interface CategoryInterface {
  id?:number;
  name?:string;
  articles?:Article[];
}

export class Category implements CategoryInterface {
  public id?:number;
  public name?:string;
  public articles?:Article[];


  constructor (c:CategoryInterface) {
  this.id = c.id;
  this.name = c.name;
  this.articles = c.articles;
  }
}


