import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './abouts/abouts.component';
import { Router } from '@angular/router';

import { serevcomponent } from './server/server.component';
import { CustomeComponent } from './custome/custome.component';

const routes: Routes=[
  
  {path:'home',component:HomeComponent},
  {path:'abouts',component:AboutsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutsComponent,
    serevcomponent,
    CustomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
