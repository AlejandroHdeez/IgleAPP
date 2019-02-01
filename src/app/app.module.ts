import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { ListNewsComponent } from './component/admin/list-news/list-news.component';
import { HomeComponent } from './component/home/home.component';
import { Page404Component } from './component/page404/page404.component';
import { HeroComponent } from './component/hero/hero.component';
import { DetailsNewsComponent } from './component/details-news/details-news.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ListNewsComponent,
    HomeComponent,
    Page404Component,
    HeroComponent,
    DetailsNewsComponent
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