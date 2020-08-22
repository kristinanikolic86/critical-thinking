import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models';
import * as $ from "jquery";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  articles: Article[] = [];
  categoryId: number
  pageNumber:number;
  numberOfPages:number;
  numbers:number[];
  firstNums:number[];
  secondNums:number[];


  constructor(private service:ArticleService, private http: HttpClient, private route: ActivatedRoute, private router:Router) {
     this.getArticlesByCategoryandPage();
     this.getNumberOfPages();
   }

  ngOnInit() {
  }

  getArticlesByCategoryandPage() {
    this.route.params.subscribe(params=> {
      this.categoryId = +params['id'],
      this.pageNumber = +params['pageNumber'];
    this.service.getArticlesByCategoryandPage(this.categoryId, this.pageNumber).subscribe(
      res=> {
        this.articles = res;
      },
      error => {
        this.router.navigate(['/**'])
      })}


      )}
getNumberOfPages(){
  this.route.params.subscribe(params=> {
    this.categoryId = +params['id'],
  this.service.getNumberOfPages(this.categoryId).subscribe(
    res => {
      this.numberOfPages = res;
      this.numbers = Array(this.numberOfPages).fill(0).map((x,i)=>i+1)
      this.firstNums = this.numbers.slice(0, this.pageNumber-1)
      this.secondNums = this.numbers.slice(this.pageNumber)
    }
  )
}
  )
}

  refresh(): void {
    window.location.reload();
  }



  }



