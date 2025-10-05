import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bo-title',
  imports: [MatIconModule],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  @Input() title!: string;
  @Input() icon!: string;
}
