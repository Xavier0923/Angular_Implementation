import { ArticlesService } from './articles.service';
import { Component } from '@angular/core';
import { Article } from './article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private articlesService: ArticlesService){

  }

  list: Article[] = [];
  list$ = this.articlesService.getArticles();
  title = 'conduitxxxx';
  subtitle = 'A place to share your <u>knowledge</u>.';
  keyword = 'test';

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe(articles => {
      this.list = articles;
    })
  }

  doSearch(event: any){
    console.log(event);
    this.articlesService.queryArticle(event).subscribe(res => {
      this.list = res;
    });

  }
}
