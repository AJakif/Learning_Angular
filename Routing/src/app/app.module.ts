import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Button1Component } from './Components/button1/button1.component';
import { Button2Component } from './Components/button2/button2.component';

@NgModule({
  declarations: [
    AppComponent,
    Button1Component,
    Button2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
