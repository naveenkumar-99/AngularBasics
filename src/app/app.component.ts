import { Component } from '@angular/core';
import { ComponentContainer } from "./Container/container.component"; 
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ComponentContainer]
})
export class AppComponent {
  title = 'NS Car Decors';
}
