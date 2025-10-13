import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReducePipe } from './pipes/reduce';

@Component({
  selector: 'app-root',
  imports: [DecimalPipe, CurrencyPipe, DatePipe, JsonPipe, PercentPipe, LowerCasePipe, UpperCasePipe, TitleCasePipe, SlicePipe, AsyncPipe, ReducePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  price = 103.4567;
  quantity = 56.34;
  total = this.price * this.quantity;

  currentDate = new Date();

  info = {
    name: 'Laptop',
    price: 2500,
    stock: 5,
    available: true,
    features: ['16GB RAM', '512GB SSD', 'Intel i7'],
    releaseDate: new Date(2023, 5, 15),
    brands: [{
      manufacturer: 'TechBrand',
      seller: 'BestBuy',
      warranty: '2 years'
    }, {
      manufacturer: 'GadgetCo',
      seller: 'Amazon',
      warranty: '1 year'
    }, {
      manufacturer: 'DeviceMart',
      seller: 'eBay',
      warranty: '6 months'
    }]
  }

  percentAdvanced = 0.3464654

  receipt = "Order #12345\nDate: 2023-10-01\nItems:\n - Laptop: $2500\n - Mouse: $25\nTotal: $2525\nThank you for your purchase!"

  course = "Microservicios con Docker y Kubernetes"

  courseList = ["Microservicios con Docker y Kubernetes", "Angular desde Cero", "Node.js Avanzado", "React para Principiantes", "Desarrollo con Vue.js", "Python para Data Science", "Java Spring Boot", "C# y .NET Core", "Ruby on Rails", "Go para Desarrolladores"]

  totalEnrolled = new Promise((resolve) => {
    setTimeout(() => {
      resolve(5234)
    }, 8000);
  })
}
