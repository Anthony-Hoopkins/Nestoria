import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
// import {HttpClientModule} from "@angular/common/http";
import {Counter1Component} from "./counter1/counter1.component";
import {MainDisplayComponent} from "./main-display/main-display.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, Counter1Component, MainDisplayComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
