import {Component} from '@angular/core'
import { NavComponent } from "../nav/nav.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [NavComponent, HeaderComponent]
  })

 
export class ComponentContainer{




}