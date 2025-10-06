import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-c4',
  imports: [],
  templateUrl: './c4.html',
  styleUrl: './c4.css'
})
export class C4 {
  sub = new Subject<number>();

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
