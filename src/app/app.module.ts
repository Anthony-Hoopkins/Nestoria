import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainDisplayComponent} from "./main-display/main-display.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ItemComponent} from "./item/item.component";
import {PaginationComponent} from "./pagination/pagination.component";
import {FavoriteDisplayComponent} from "./favorite-display/favorite-display.component";
import {FlatsListComponent} from "../assets/backet/flats-list/flats-list.component";
import {FlatItemComponent} from "./flat-item/flat-item.component";
import {HeaderPanelComponent} from "../assets/backet/header-panel/header-panel.component";


// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'about', component: AboutComponent},
  { path: 'home',  redirectTo: '/'},
  // { path: 'contact',  redirectTo: '/about'},
  // { path: 'item/:id', component: ItemComponent},
  // { path: 'page/:id', component: ItemComponent},
  { path: 'buy/:id', component: MainDisplayComponent},
  { path: 'favorite', component: FavoriteDisplayComponent},
  { path: 'buy', redirectTo: '/buy/'},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent, SidebarComponent, MainDisplayComponent, HomeComponent, AboutComponent, NotFoundComponent,
    ItemComponent, PaginationComponent, FavoriteDisplayComponent, FlatsListComponent, FlatItemComponent, HeaderPanelComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpClientJsonpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
