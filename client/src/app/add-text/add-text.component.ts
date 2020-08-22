import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article, Category } from '../models';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {

  newArticle:Article = new Article ({
  title: "",
  text: "",
  description: "",
  mainImage: "",
  category: new Category ({
  }),
});

choose:string ="Odaberi kategoriju:"


categories:Category[] =[];


constructor(private http: HttpClient, private service: ArticleService,
  private router: Router) {
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

  createArticle () {
    if (!this.newArticle.title.replace(/\s/g, '').length || !this.newArticle.mainImage.replace(/\s/g, '').length) {
      alert("Ne možete unositi samo prazna polja. Pokušajte ponovo.");
      return;
    }
    if(this.newArticle.mainImage.substr(0,8) !== 'https://') {
      alert("Uneli ste neispravan url. Pokušajte ponovo.");
      return;
    }
  this.service.createArticle(this.newArticle).subscribe(
    res=> {
      this.newArticle = res;
      alert("Vaš članak je uspešno sačuvan!");
      this.router.navigate(['/admin/neobjavljeni_tekstovi'])

    },
    error=> {
      alert ("Došlo je do greške. Pokušajte ponovo.")
    }
  )

}

  goToPublished(){
    if (confirm('Da li ste sigurni?')){
      this.router.navigate(['/admin/objavljeni_tekstovi'])
    }
  }

  goToUnpublished(){
    if (confirm('Da li ste sigurni?')){
      this.router.navigate(['/admin/neobjavljeni_tekstovi'])
    }
  }


}
