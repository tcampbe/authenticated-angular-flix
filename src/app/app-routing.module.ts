import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { SignupLoginComponent } from "./signup-login/signup-login.component";

const routes: Routes = [

/*   { path: "main", component: MainComponent },
 */
  { path: "", component: SignupLoginComponent }


];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule {}
