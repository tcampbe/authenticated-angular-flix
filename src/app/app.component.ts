import { Component,OnInit } from '@angular/core';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private movieService: MovieService){}
  ngOnInit(): void {
    this.myMovieList = this.movieService.getMovieList();
    this.searchResults = this.movieService.getSearchResults();
   this.movieService.loadMovieList();
  }
  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';
}
