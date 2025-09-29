import { Component } from '@angular/core';
import { Container } from './container/container';

@Component({
  selector: 'app-root',
  imports: [Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handleClick() {
    alert('Button clicked!');
  }
}
