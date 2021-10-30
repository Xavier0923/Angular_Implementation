import { Article } from './article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  queryArticle(keyowrd: string) {
    return this.httpClient.get<Article[]>(
      `http://localhost:3000/articles?q=${keyowrd}`
    );
  }

  getArticles(){
    return this.httpClient.get<Article[]>("http://localhost:3000/articles")
  }
}
