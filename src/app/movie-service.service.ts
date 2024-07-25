import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Rating, MovieFullInformations, MovieShortInformations, SearchResponse } from './model/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey:string = '53e1da32';

  constructor(private httpClient:HttpClient) {}

  searchMovie(movieName:string):Observable<MovieShortInformations[]> {
    return this.httpClient
      .get<SearchResponse>('https://www.omdbapi.com/?apikey=' + this.apiKey + '&s=' + movieName)
      .pipe(map((reponse) => reponse.Search));
  }

  getMovieDetail(movieID:string):Observable<MovieFullInformations> {
    return this.httpClient
      .get<MovieFullInformations>('https://www.omdbapi.com/?apikey=' + this.apiKey + '&i=' + movieID);
  }
}
