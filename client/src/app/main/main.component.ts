import { Component, OnInit } from '@angular/core';
import { Article } from '../models';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  articles: Article[] = []

  constructor(private service:ArticleService) {
    this.getArticles();
  }

  ngOnInit() {

  }

  getArticles() {
    this.service.getPublishedArticles().subscribe(
      res=> {
        this.articles = res;
      }
    )
  }


}
