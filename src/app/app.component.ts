// Import the Component module from the Angular core library
import { Component } from '@angular/core';

// Declare the component and provide metadata via the @Component decorator
@Component({
  // The selector defines how the component is identified within the application
  selector: 'app-root',
  // The templateUrl specifies the HTML file that the component uses to render its view
  templateUrl: './app.component.html',
  // The styleUrls specifies the CSS file(s) that the component uses to style its view
  styleUrls: ['./app.component.css']
})

// Define the AppComponent class and its properties and methods
export class AppComponent {
  // Declare a property called 'title' and set its value to 'Tour of Heroes'
  title = 'Tour of Heroes';
}
