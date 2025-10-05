import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bo-menu',
  imports: [MatListModule, RouterLink, MatIconModule, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  listItemMenu = [
    { label: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
    { label: 'Courses', link: '/course', icon: "book" },
    { label: 'Schedules', link: '/schedule', icon: "schedule" },
    { label: 'Teachers', link: '/teacher', icon: "school" },
  ]
}
