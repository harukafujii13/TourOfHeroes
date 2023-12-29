import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    HeroSearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// BrowserModule: Provides services that are essential to launch and run a browser app.
// FormsModule: Contains directives for building forms and binding data to the form.
// AppRoutingModule: A module that handles navigation within the app.
// HttpClientInMemoryWebApiModule: Configures and initializes an in-memory web API for backend-less development or testing, simulating CRUD operations over a RESTful API.
