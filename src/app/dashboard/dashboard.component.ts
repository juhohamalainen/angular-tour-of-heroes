// Import the required modules and services from Angular
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  // Define the selector, template and style URLs for the component
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  // Declare a property to hold the hero objects
  heroes: Hero[] = [];

  // Inject the HeroService into the component constructor
  constructor(private heroService: HeroService) { }

  // Implement the OnInit interface and call getHeroes on initialization
  ngOnInit(): void {
    this.getHeroes();
  }

  // Call the HeroService to get the list of heroes
  getHeroes(): void {
    this.heroService.getHeroes()
      // Subscribe to the returned Observable and assign the hero array to the component property
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
