import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../authentication.service"
import { MovieService } from "../movie.service"


@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})

export class SignupLoginComponent implements OnInit {

  user={username:'', password:''}

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {}

  async authenticate(){
  
      await this.authService.signup()

      await this.authService.login(this.user);

    }

}
