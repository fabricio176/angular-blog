import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { TitleMainComponent } from './components/navbar/title-main/title-main.component';
import { CardComponent } from './components/background-image/card/card.component';
import { ButtonComponent } from './components/navbar/button/button.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    BackgroundImageComponent,
    CardComponent,
    TitleMainComponent,
    ButtonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
