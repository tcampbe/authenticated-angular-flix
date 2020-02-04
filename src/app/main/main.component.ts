import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AuthenticationService } from "../authentication.service"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private authService: AuthenticationService
  ){}

  async authenticate(){
    const user = {
      username:"test1",
      password: "test1password"
    }

    await this.authService.signup(user);

    const response = await this.authService.login(user);

/*     console.log(response.token);
 */
  }

  async ngOnInit() {
    this.myMovieList = await this.movieService.getMovieList();
    this.searchResults = this.movieService.getSearchResults();
    this.movieService.loadMovieList();
  }

  searchResults = [];
  myMovieList =  [];
  title = 'Angular Flix';
  
}