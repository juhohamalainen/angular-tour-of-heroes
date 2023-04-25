import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,  // inject the ActivatedRoute service
    private heroService: HeroService, // inject the HeroService
    private location: Location // inject the Location service
  ) {}

  ngOnInit(): void {
    this.getHero(); // call the getHero() method when the component is initialized
  }

  // Retrieve the hero id from the route parameters and call the getHero() method from the HeroService
  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); // get the hero id from the route parameters using the ActivatedRoute service
    this.heroService.getHero(id) // call the getHero() method from the HeroService to retrieve the hero with the specified id
      .subscribe(hero => this.hero = hero); // assign the retrieved hero to the "hero" property of the component
  }

  // Navigate back to the previous location using the Location service
  goBack(): void {
    this.location.back();
  }

  // Save the changes to the hero using the HeroService and navigate back to the previous location
  save(): void {
    if (this.hero) { // check that a hero object is defined
      this.heroService.updateHero(this.hero) // call the updateHero() method from the HeroService to save the changes to the hero
        .subscribe(() => this.goBack()); // navigate back to the previous location using the Location service
    }
  }
}
