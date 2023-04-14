import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchoolComponent } from './school/school.component';

import { AppComponent } from './app.component';
import { SchoolsComponent } from './schools/schools.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
