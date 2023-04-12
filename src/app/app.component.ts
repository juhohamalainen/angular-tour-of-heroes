//Component class code, written in TypeScript.
//Import the Component symbol from the Angular core library
import { Component } from '@angular/core';

//Decorator function that specifies the Angular metadata for the component
@Component({
  //The component's CSS element selector.
  selector: 'app-root',
  //The location of the component's template file.
  templateUrl: './app.component.html',
  //The location of the component's private CSS styles.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
