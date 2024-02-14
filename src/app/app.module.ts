import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersService } from './github-followers/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubFollowersComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
