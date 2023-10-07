import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Step 1: Import HttpClientModule

import { AppComponent } from '../app/app.component';
import { HomeComponent } from './home.component'; // Import your component if not done already

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Declare your component if not done already
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Step 2: Add HttpClientModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
