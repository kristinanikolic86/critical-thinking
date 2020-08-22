import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article, Category } from './models';
import { AuthenticationService } from './security/authentication.service';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'svojom-glavom';

  keyWord:string;
  articles:Article[];
  categories:Category[]
  firstNavCategories:Category[]
  secondNavCategories:Category[]

  constructor(private router: Router, private authenticationService: AuthenticationService, private articleService:ArticleService,
    private http: HttpClient) {
      this.getCategories();
  }

  ngOnInit() {
    $('#menu').hide();
  }

  getCategories(){
    this.articleService.getCategories().subscribe(
      res=> {
        this.categories = res;
        this.firstNavCategories = res.slice(0,9)
        this.secondNavCategories = res.slice(9,18)
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }

  navigateToMain () {
    this.router.navigate(['početna']);
    this.keyWord=""
  }

  toggle() {
    $('#menu').toggle('slow');
  }


  onActivate(event) {
    window.scroll(0,0);
  }


  search() {
  this.router.navigate(['/pretraga/ključna reč/', this.keyWord ]);

  }

  logout():void{
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }
}
