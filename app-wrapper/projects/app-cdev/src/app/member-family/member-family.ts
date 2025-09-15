import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdev-member-family',
  imports: [],
  templateUrl: './member-family.html',
  styleUrl: './member-family.css'
})
export class MemberFamily {
  @Input() data!: { name: string; relation: string, age: number }
}
