import { Component, Input } from '@angular/core';
import { MemberFamily } from '../member-family/member-family';

@Component({
  selector: 'cdev-staff-family',
  imports: [MemberFamily],
  templateUrl: './staff-family.html',
  styleUrl: './staff-family.css'
})
export class StaffFamily {
  @Input() data!: { name: string; relation: string, age: number }[]
}
