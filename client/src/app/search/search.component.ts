import { Component, OnInit } from '@angular/core';
import { Article } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  articles: Article[] = []
  displayArticles: Article[] = []
  keyWord:string;
  stagod:string;

  constructor(private service:ArticleService, private route:ActivatedRoute, private router:Router) {
    this.getArticles();
  }

  ngOnInit() {
  }

  getArticles() {
    this.route.params.subscribe(params=> {
    this.keyWord = params['keyword']
    this.service.search(this.keyWord).subscribe(
        res=> {
          this.articles = res;
          for(var a of this.articles) {
            var cleanTitle = a.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/Đ/g, "DJ").replace(/đ/g, "dj")
            var cleanText = a.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/Đ/g, "DJ").replace(/đ/g, "dj")
            var cleanKeyWord = this.keyWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/Đ/g, "DJ").replace(/đ/g, "dj")
            if(cleanText.toLowerCase().includes(cleanKeyWord.toLowerCase())){
              var start = cleanText.toLowerCase().indexOf(cleanKeyWord.toLowerCase());
              var end = cleanText.toLowerCase().indexOf(cleanKeyWord.toLowerCase())+ cleanKeyWord.length
              a.description = cleanText.replace(cleanText.substring(start, end), cleanText.substring(start, end).bold())
            }
            if(cleanTitle.toLowerCase().includes(cleanKeyWord.toLowerCase())) {
              var start = cleanTitle.toLowerCase().indexOf(cleanKeyWord.toLowerCase());
              var end = cleanTitle.toLowerCase().indexOf(cleanKeyWord.toLowerCase())+ cleanKeyWord.length
              a.title = cleanTitle.replace(cleanTitle.substring(start, end), cleanTitle.substring(start, end).fontcolor("#333").bold())
            }
        }
      }
    ,
        error => {
          this.router.navigate(['/**'])
        }

      )
    })
  }




}
