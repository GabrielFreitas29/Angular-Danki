import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchoolComponent } from './school/school.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
