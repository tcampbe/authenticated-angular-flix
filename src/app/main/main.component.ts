import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})

export class MainComponent implements OnInit {
  
  constructor(
    private movieService: MovieService,
    private authService: AuthenticationService
  ){}

  async ngOnInit() {
    this.myMovieList = this.movieService.getMovieList();
    this.searchResults = this.movieService.getSearchResults();
    this.movieService.loadMovieList();
  }

  searchResults = [];

  myMovieList = [];

  title = "Angular Flix";
}
