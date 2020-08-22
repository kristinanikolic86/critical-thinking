import { Component, OnInit } from '@angular/core';
import { Article, Category } from '../models';
import * as $ from "jquery";
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  article:Article = new Article ({
    title: "",
    text: "",
    description: "",
    mainImage: "",
    category: new Category ({})

  });
  public show: boolean = false;
  id:number;

  constructor(private service:ArticleService, private route: ActivatedRoute, private router: Router) {
    this.getArticle();
  }

  ngOnInit() {
  }


  getArticle() {
    this.route.params.subscribe(params=> {
    this.id = +params['id'],
    this.service.getArticle(this.id).subscribe(
      res=> {
       this.article = res;
      },
      error => {
        this.router.navigate(['/**'])
      })}


      )}
}
