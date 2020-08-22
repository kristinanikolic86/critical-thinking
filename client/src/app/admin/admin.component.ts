import { Component, OnInit } from '@angular/core';

import { Category, Article } from '../models';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { AuthenticationService } from '../security/authentication.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  articles: Article[] = [];
  categories:Category[] =[]
  category: Category = new Category({})
  deletedArticle: Article;
  categorySearch:boolean=false;
  keyWord:String


  constructor(private service:ArticleService, private http:HttpClient, private router:Router,
    private authenticationService:AuthenticationService) {
    this.getAllPublishedArticles();
    this.getCategories();
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

  resetFilter() {
    this.refresh();
  }


  refresh() {
    window.location.reload();
  }


  getAllPublishedArticles() {
    this.service.getAllPublishedArticles().subscribe(
      res=> {
        this.articles=res;
      }
    )
  }

  logout():void{
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}










