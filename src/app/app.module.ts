import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from './nav/nav.component';
import { NiceBackgroundComponent } from './nice-background/nice-background.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavComponent,
    NiceBackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
