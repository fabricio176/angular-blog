import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { CardComponent } from './background-image/card/card.component';
import { TitleMainComponent } from './navbar/title-main/title-main.component';
import { ButtonComponent } from './navbar/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    BackgroundImageComponent,
    CardComponent,
    TitleMainComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
