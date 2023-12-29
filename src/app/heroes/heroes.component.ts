// ng generate component heroes

import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent,
    RouterModule,
  ],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // ngOnInit(): Lifecycle hook that calls getHeroes() to fetch the initial list of heroes when the component initializes.

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  // getHeroes(): Retrieves heroes from the HeroService and assigns them to the heroes array.

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  //add(name: string): Adds a new hero to the list. It trims the input name, checks for non-empty values, and then uses HeroService to add the hero and update the list.

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

//delete(hero: Hero): Removes a hero from the list. It filters out the hero to be deleted and calls HeroService to remove it from the server.
