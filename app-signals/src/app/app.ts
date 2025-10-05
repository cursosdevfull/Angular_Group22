import { HttpClient } from '@angular/common/http';
import { Component, computed, signal, effect, inject, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter = signal<number>(0)
  price = signal<number>(100);
  tax = signal<number>(0.15);
  showTotalDollar = signal<boolean>(false);
  user = signal<number>(1);

  total = computed(() => {
    const total = this.price() * (1 + this.tax());
    if (this.showTotalDollar()) {
      return `$${total.toFixed(2)} (USD)`;
    } else {
      return `€${(total * 0.9).toFixed(2)} (EUR)`;
    }
  });

  http = inject(HttpClient);

  injector = inject(Injector)

  constructor() {
    effect(() => {
      this.http.get(`https://jsonplaceholder.typicode.com/users/${this.user()}`)
        .subscribe({
          next: (data) => console.log(data)
        })
    })
  }

  ngOnInit() {
    effect(() => {
      console.log(`Total updated: ${this.total()}`);
    }, { injector: this.injector })
  }

  //counter = 0

  getRandom() {
    this.counter.set(Math.floor(Math.random() * 100 + 1));
    //this.counter = Math.floor(Math.random() * 100 + 1);
  }

  increment() {
    this.counter.update(value => value + 1);
  }

  updatePrice() {
    this.price.update(value => value + 10)
  }

  updateTax() {
    this.tax.update(value => value + 0.01)
  }

  toggleCurrency() {
    this.showTotalDollar.update(value => !value)
  }

  fetchUser() {
    this.user.update(value => value + 1);
  }


}
