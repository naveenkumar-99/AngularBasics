import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  template: `<div class = notification-div>
         <p> The NS car-decors Best service in Rajam. Please contact number is 9963397531 

         </p>
         </div>`,
  styleUrl: './notification.component.css'


})
export class NotificationComponent implements OnInit {
 
 constructor(){}  
  ngOnInit(): void {
   
  }

}
