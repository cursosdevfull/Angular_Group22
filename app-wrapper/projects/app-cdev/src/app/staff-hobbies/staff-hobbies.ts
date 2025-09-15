import { Component, Input } from '@angular/core';
import { Hobby } from '../hobby/hobby';

@Component({
  selector: 'cdev-staff-hobbies',
  imports: [Hobby],
  templateUrl: './staff-hobbies.html',
  styleUrl: './staff-hobbies.css'
})
export class StaffHobbies {
  @Input() data!: string[]
}
