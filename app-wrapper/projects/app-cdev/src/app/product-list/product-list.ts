import { Component } from '@angular/core';
import { Product } from '../product/product';

@Component({
    selector: 'cdev-product-list',
    template: `
        <h2>Product List</h2>
        @for(product of products; track product.name){
            <cdev-product [info]="product"></cdev-product>
        }
    `,
    imports: [Product]
})
export class ProductList {
    products = [
        { name: "Laptop", price: 999, stock: 10 },
        { name: "Smartphone", price: 699, stock: 0 },
        { name: "Tablet", price: 499, stock: 30 },
        { name: "Smartwatch", price: 199, stock: 40 },
        { name: "Headphones", price: 149, stock: 0 },
        { name: "Camera", price: 799, stock: 15 },
        { name: "Printer", price: 299, stock: 5 },
        { name: "Monitor", price: 399, stock: 20 },
        { name: "Keyboard", price: 99, stock: 50 },
        { name: "Mouse", price: 49, stock: 60 }
    ];
}