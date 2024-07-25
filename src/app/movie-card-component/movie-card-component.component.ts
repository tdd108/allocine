import { Component, Input } from '@angular/core';
import { MovieFullInformations, MovieShortInformations } from '../model/movie';
import { MovieService } from '../movie-service.service';

@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card-component.component.html',
  styleUrl: './movie-card-component.component.css'
})
export class MovieCardComponentComponent {
  showDetail:boolean = false;
  movieFullInfo:MovieFullInformations = {
    Title: '',
    Year: '',
    Genre: '',
    Director: '',
    Plot: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    imdbID: '',
    Type: ''
  };

  @Input() movieShortInfo:MovieShortInformations = 
    {Title:'', Year:'', imdbID: '', Type: '', Poster: ''};
  
  constructor(private movieService: MovieService) {}

  getMovieDetail() {
    this.movieService
      .getMovieDetail(this.movieShortInfo.imdbID)
      .subscribe((result) => (this.movieFullInfo = result));
  }
}
