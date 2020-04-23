import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './abouts/abouts.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
}
