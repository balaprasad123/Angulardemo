import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './abouts/abouts.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"abouts",component:AboutsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
