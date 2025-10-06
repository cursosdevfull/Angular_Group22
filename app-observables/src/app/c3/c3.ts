import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-c3',
  imports: [AsyncPipe],
  templateUrl: './c3.html',
  styleUrl: './c3.css'
})
export class C3 {
  timer = interval(1000);
  observable: Observable<number>

  constructor() {
    console.log("C3 constructor")
    this.observable = this.timer
  }
}
