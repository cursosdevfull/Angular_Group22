import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdev-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input() info: any
}
