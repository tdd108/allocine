import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { MovieShortInformations } from '../model/movie';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent implements OnInit {
  moviesList:MovieShortInformations[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  searchMovie(movieName:string) {
    this.movieService.searchMovie(movieName)
      .subscribe((movies) => (this.moviesList = movies));
  }
}
