import { Component, Input } from '@angular/core';
import { MovieShortInformations } from '../model/movie';

@Component({
  selector: 'app-movie-list-component',
  templateUrl: './movie-list-component.component.html',
  styleUrl: './movie-list-component.component.css'
})
export class MovieListComponentComponent {
  @Input() moviesList:MovieShortInformations[] = [];

  constructor() {}
}
