// Import necessary modules from the Angular core and custom hero-related modules
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Define the HeroesComponent and provide metadata via the @Component decorator
@Component({
  // The selector defines how the component is identified within the application
  selector: 'app-heroes',
  // The templateUrl specifies the HTML file that the component uses to render its view
  templateUrl: './heroes.component.html',
  // The styleUrls specifies the CSS file(s) that the component uses to style its view
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Declare a property called 'heroes' and set its value to an empty array of type 'Hero'
  heroes: Hero[] = [];

  // Create a constructor that injects an instance of the HeroService
  constructor(private heroService: HeroService) { }

  // Implement the ngOnInit lifecycle hook to call the getHeroes method when the component is initialized
  ngOnInit(): void {
    this.getHeroes();
  }

  // Define the getHeroes method that retrieves a list of heroes from the HeroService
  getHeroes(): void {
    // Call the HeroService's getHeroes method and subscribe to the returned Observable to populate the 'heroes' array
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  // Define the add method that creates a new hero with the given name and adds it to the 'heroes' array
  add(name: string): void {
    // Remove whitespace from the input name and return if it is empty
    name = name.trim();
    if (!name) { return; }
    // Call the HeroService's addHero method to add the new hero and subscribe to the returned Observable to update the 'heroes' array
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Define the delete method that removes the given hero from the 'heroes' array
  delete(hero: Hero): void {
    // Use the filter method to remove the given hero from the 'heroes' array
    this.heroes = this.heroes.filter(h => h !== hero);
    // Call the HeroService's deleteHero method to remove the hero from the database
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
