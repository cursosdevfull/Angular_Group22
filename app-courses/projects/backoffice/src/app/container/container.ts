import { Component } from '@angular/core';
import { Login } from '../security/login/login';

@Component({
  selector: 'bo-container',
  imports: [Login],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {

}
