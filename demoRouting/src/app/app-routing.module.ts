import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FistnameComponent } from './fistname/fistname.component';
import { LastnameComponent } from './lastname/lastname.component';


const routes: Routes = [

  {path :"",component : FistnameComponent},
  {path :"lastname",component : LastnameComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
