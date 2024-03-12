import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, RespuestaTopHeadlines } from '../interfaces';
import { Observable, map } from 'rxjs';

const apiKEY = environment.apiKEY;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(): Observable<Article[]> {
    // return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKEY}`);
   return  this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business', {
    params: {
      apiKey: apiKEY
    }
   }).pipe(
    map( ({ articles }) => articles)
   );
  }


}
