import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HeroesComponent, HeroDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
