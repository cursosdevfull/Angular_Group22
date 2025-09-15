import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Register } from './register/register';
import { ProductList } from './product-list/product-list';
import { StaffList } from './staff-list/staff-list';

@Component({
  selector: 'cdev-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [StaffList]
})
export class App {

}
