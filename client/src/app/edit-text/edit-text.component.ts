import { Component, OnInit } from '@angular/core';
import { Article, Category } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.css']
})
export class EditTextComponent implements OnInit {

  newArticle:Article = new Article ({
    category: new Category ({})
  });
  id:number;
  categories:Category[] =[];
  choose:string ="Odaberi kategoriju:"

  constructor(private service: ArticleService, private route: ActivatedRoute, private router: Router) {

    this.getCategories();
    this.getArticle();
  }

  ngOnInit() {
  }

  getArticle() {
    this.route.params.subscribe(params=> {
      this.id = +params['id'],
      this.service.getUnpublishedArticle(this.id).subscribe(
        res=> {
          this.newArticle = res;},
        error => {
          this.router.navigate(['/**']);})})}


  getCategories() {
    this.service.getCategories().subscribe(
      res=> {
        this.categories = res;
      }
    )
  }

  changeArticle() {
    if (!this.newArticle.title.replace(/\s/g, '').length
     || !this.newArticle.mainImage.replace(/\s/g, '').length) {
      alert("Ne možete unositi samo prazna polja. Pokušajte ponovo.");
      return;
    }
    if(this.newArticle.mainImage.substr(0,8) !== 'https://') {
      alert("Uneli ste neispravan url. Pokušajte ponovo.");
      return;
    }
    this.service.changeArticle(this.id, this.newArticle).subscribe(
      res=> {
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
