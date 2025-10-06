import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-c1',
  imports: [],
  templateUrl: './c1.html',
  styleUrl: './c1.css'
})
export class C1 {
  timer = interval(1000);
  subscription!: Subscription

  constructor() {
    console.log("C1 constructor")
    this.subscription = this.timer.subscribe(value => console.log("C1", value))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
