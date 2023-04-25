// Import the Component module from the Angular core library
import { Component } from '@angular/core';

// Import the MessageService module from the application
import { MessageService } from '../message.service';

// Declare the component and provide metadata via the @Component decorator
@Component({
  // The selector defines how the component is identified within the application
  selector: 'app-messages',
  // The templateUrl specifies the HTML file that the component uses to render its view
  templateUrl: './messages.component.html',
  // The styleUrls specifies the CSS file(s) that the component uses to style its view
  styleUrls: ['./messages.component.css']
})

// Define the MessagesComponent class and its properties and methods
export class MessagesComponent {
  // Declare a constructor that takes an argument of type MessageService
  constructor(public messageService: MessageService) {}
}
