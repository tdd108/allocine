import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {
  constructor() {}

  movieName:string = '';

  @Output() searchMovieEvent = new EventEmitter<string>();

  search() {
    this.searchMovieEvent.emit(this.movieName);
    this.movieName = '';
  }
}