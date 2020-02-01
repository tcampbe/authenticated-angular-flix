import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TitleListComponent } from './title-list/title-list.component';


const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'titlelist', component: TitleListComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
