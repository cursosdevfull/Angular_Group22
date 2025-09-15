import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdev-hobby',
  imports: [],
  templateUrl: './hobby.html',
  styleUrl: './hobby.css'
})
export class Hobby {
  @Input() data!: string
}
