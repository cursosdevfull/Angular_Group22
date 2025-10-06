import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-c5',
  imports: [],
  templateUrl: './c5.html',
  styleUrl: './c5.css'
})
export class C5 {
  sub = new BehaviorSubject<number>(0);

  constructor() {
    this.sub.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
      error: (err) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });


    setTimeout(() => {
      this.sub.subscribe({
        next: (v) => console.log(`observerB: ${v}`),
      });
    }, 5000);

    setTimeout(() => {
      this.sub.subscribe({
        next: (v) => console.log(`observerC: ${v}`),
      });
    }, 8000);
  }

  sendValue() {
    this.sub.next(Math.random());
  }
}
