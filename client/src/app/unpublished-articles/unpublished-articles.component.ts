import { Component, OnInit } from '@angular/core';
import { Article, Category } from '../models';
import { ArticleService } from '../article.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unpublished-articles',
  templateUrl: './unpublished-articles.component.html',
  styleUrls: ['./unpublished-articles.component.css']
})
export class UnpublishedArticlesComponent implements OnInit {

  articles: Article[] = [];
  categories:Category[] =[]
  category: Category = new Category({})
  deletedArticle: Article;

  constructor(private service:ArticleService, private http:HttpClient, private router:Router) {
    this.getUnpublishedArticles();
   }

  ngOnInit() {
  }

  getCategories() {
    this.service.getCategories().subscribe(
      res=> {
        this.categories = res;
      }
    )
  }

  getUnpublishedArticles() {
    this.service.getUnpublishedArticles().subscribe(
      res=> {
        this.articles = res;
      }
    )
  }

  deleteArticle(id:number) {
    if(confirm('Da li ste sigurni da želite da obrišete članak?')){
    this.service.deleteArticle(id).subscribe(
      res=> {
        this.deletedArticle = res;
        this.refresh();
      }
    )
    }
  }

  refresh() {
    window.location.reload();
  }

}
