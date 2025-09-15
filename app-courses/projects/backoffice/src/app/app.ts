import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './container/container';

@Component({
  selector: 'bo-root',
  imports: [Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
