import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, Category } from './models';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  // only published articles (9 of them)
  getPublishedArticles():Observable<Article[]> {
    return this.http.get<Article[]> ("/api/articles");
  }

  // only published articles by category
  getArticlesByCategory(categoryId:number):Observable<Article[]> {
    return this.http.get<Article[]> ("/api/articles/"+categoryId);
  }

    // only published articles by category PAGE
    getArticlesByCategoryandPage(categoryId:number, pageNumber:number):Observable<Article[]> {
      return this.http.get<Article[]> ("/api/articles/"+categoryId+"/page/"+pageNumber);
    }

     // number of pages per category
     getNumberOfPages(categoryId:number):Observable<number> {
      return this.http.get<number> ("/api/number/"+categoryId);
    }

  // only published article
  getArticle(id:number):Observable<Article> {
    return this.http.get<Article> ("/api/article/"+id);
  }

  // get categories
  getCategories():Observable<Category[]> {
    return this.http.get<Category[]> ("/api/categories");
  }

  search(keyWord:string):Observable<Article[]> {
    return this.http.get<Article[]> ("/api/search?keyWord="+keyWord);
  }


  //admin

  // get all published articles
  getAllPublishedArticles():Observable<Article[]> {
    return this.http.get<Article[]> ("/api/admin/articles");
  }

  // get unpublished article
  getUnpublishedArticle(id:number):Observable<Article> {
    return this.http.get<Article> ("/api/admin/article/"+id);
  }

  // create article
  createArticle(newArticle:Article):Observable<Article> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Article> ("/api/admin/articles", newArticle, { headers })
  }

  // publish article
  publishArticle(id: number):Observable<Article> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Article> ("/api/admin/article/" + id, { headers })
  }

  // change an unpublished article
  changeArticle(id: number, newArticle:Article):Observable<Article> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Article> ("/api/admin/changearticle/" + id,  newArticle, { headers })
  }

  //delete an article
  deleteArticle(id:number):Observable<Article> {
    return this.http.delete<Article>("/api/admin/article/"+id);
  }

  sortArticles():Observable<Article[]> {
    return this.http.get<Article[]>("/api/admin/sort/articles");
  }

   // only unpublished articles
   getUnpublishedArticles():Observable<Article[]> {
    return this.http.get<Article[]> ("/api/unpublishedarticles");
  }

}
