// Import the NgModule, RouterModule, and Routes modules from the Angular core library
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the DashboardComponent, HeroesComponent, and HeroDetailComponent modules from the application
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Define the routes for the application
const routes: Routes = [
  // Redirect the root path to the dashboard path
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Map the dashboard path to the DashboardComponent
  { path: 'dashboard', component: DashboardComponent },
  // Map the detail path with an id parameter to the HeroDetailComponent
  { path: 'detail/:id', component: HeroDetailComponent },
  // Map the heroes path to the HeroesComponent
  { path: 'heroes', component: HeroesComponent }
];

// Declare the AppRoutingModule module and provide metadata via the @NgModule decorator
@NgModule({
  // Import the RouterModule and provide the routes
  imports: [ RouterModule.forRoot(routes) ],
  // Export the RouterModule for use in the application
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
