import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { LoginComponent } from './login/login.component';
import { LeftnavigationComponent } from './leftnavigation/leftnavigation.component';
import { RightnavigationComponent } from './rightnavigation/rightnavigation.component';
import { BottomnavigationComponent } from './bottomnavigation/bottomnavigation.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavigationComponent,
    LoginComponent,
    LeftnavigationComponent,
    RightnavigationComponent,
    BottomnavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
