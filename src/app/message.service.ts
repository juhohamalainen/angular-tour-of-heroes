import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Declare that this service should be provided at the root level
})
export class MessageService {
  messages: string[] = []; // Declare an array of messages

  add(message: string) { // Define a method to add a new message to the array
    this.messages.push(message);
  }

  clear() { // Define a method to clear the array of messages
    this.messages = [];
  }
}
