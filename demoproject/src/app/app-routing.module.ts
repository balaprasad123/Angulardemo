import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [
  {path : "welcome/:name", component :WelcomeComponent},
  {path : "todos", component : TodolistComponent},
  {path : "",component : LoginComponent},
  {path : "**", component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
