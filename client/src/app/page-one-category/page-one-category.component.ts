import { Component, OnInit } from '@angular/core';
import { Article } from '../models';
import { ArticleService } from '../article.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-one-category',
  templateUrl: './page-one-category.component.html',
  styleUrls: ['./page-one-category.component.css']
})
export class PageOneCategoryComponent implements OnInit {

  articles: Article[] = [];
  categoryId: number;
  numberOfPages:number;
  numbers:number[]
  selectedIndex:number;

  constructor(private service:ArticleService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.getArticlesByCategory();
    this.getNumberOfPages();
  }

  ngOnInit() {
  }


  getArticlesByCategory() {
    this.route.params.subscribe(params=> {
      this.categoryId = +params['id'],
    this.service.getArticlesByCategory(this.categoryId).subscribe(
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
      this.numbers = Array(this.numberOfPages).fill(0).map((x,i)=>i+1).slice(1)
    }
  )
}
  )
}

nesto(x:number){
  console.log(x+1);
  this.selectedIndex=x;

}
}
