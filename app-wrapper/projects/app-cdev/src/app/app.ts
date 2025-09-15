import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Register } from './register/register';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'cdev-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Login, Register, ProductList]
})
export class App {

}
