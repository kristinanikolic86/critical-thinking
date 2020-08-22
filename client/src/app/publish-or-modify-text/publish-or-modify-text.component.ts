import { Component, OnInit } from '@angular/core';
import { Article, Category } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-publish-or-modify-text',
  templateUrl: './publish-or-modify-text.component.html',
  styleUrls: ['./publish-or-modify-text.component.css']
})
export class PublishOrModifyTextComponent implements OnInit {

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
    this.getUnpublishedArticle();
   }

  ngOnInit() {
  }


  getUnpublishedArticle() {
    this.route.params.subscribe(params=> {
    this.id = +params['id'],
    this.service.getUnpublishedArticle(this.id).subscribe(
      res=> {
       this.article = res;
      },
      error => {
        this.router.navigate(['/**'])
      })}


      )}


  publishArticle() {
    this.service.publishArticle(this.id).subscribe(
      res=> {
        this.article=res;
        alert("Vaš članak je uspešno objavljen!");
        this.router.navigate(['/admin/objavljeni_tekstovi'])
      }
    )
  }
}







