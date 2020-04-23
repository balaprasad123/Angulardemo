import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SwitchComponent } from './switch/switch.component';
import { SwitchpractComponent } from './switchpract/switchpract.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AboutComponent,
    ContactComponent,
    SwitchComponent,
    SwitchpractComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
