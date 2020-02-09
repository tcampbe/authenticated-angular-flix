import { Component, OnInit, Input } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { MovieService } from "../movie.service";
import { Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: "app-signup-login",
  templateUrl: "./signup-login.component.html",
  styleUrls: ["./signup-login.component.css"]
})

export class SignupLoginComponent implements OnInit {
  
  @Input() user: User;

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
  }
  async authenticate(){
  
      await this.authService.signup(this.user)
     
    }
    async loginAuth(){

      await this.authService.login(this.user);
      
    }

}