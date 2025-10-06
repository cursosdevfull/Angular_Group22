import { Component } from '@angular/core';
import { interval, Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-c2',
  imports: [],
  templateUrl: './c2.html',
  styleUrl: './c2.css'
})
export class C2 {
  timer = interval(1000);
  destroy$ = new Subject<void>();

  constructor() {
    console.log("C2 constructor")
    this.timer.pipe(takeUntil(this.destroy$)).subscribe(value => console.log("C2", value))
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
