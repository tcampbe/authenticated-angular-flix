import { Component, OnInit } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../authentication.service";
import { MovieService } from "../movie.service";
/* import { AlertService } from "../service"
 */

@Component({
  selector: "app-signup-login",
  templateUrl: "./signup-login.component.html",
  styleUrls: ["./signup-login.component.css"]
})
export class SignupLoginComponent implements OnInit {
  /*   user={username:'', password:''}
   */
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private movieService: MovieService
  )  {console.log("aslfhog");}
  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      userName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  activate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    /* this.authenticationService
      .login(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Registration successful", true);

          this.router.navigate(["/login"]);
        },

        error => {
          this.alertService.error(error);

          this.loading = false;
        }
      ); */
  }
}
