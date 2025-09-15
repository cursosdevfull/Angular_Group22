import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdev-staff-general',
  imports: [],
  templateUrl: './staff-general.html',
  styleUrl: './staff-general.css'
})
export class StaffGeneral {
  @Input() data!: { name: string; age: number, location: string, occupation: string };
}
