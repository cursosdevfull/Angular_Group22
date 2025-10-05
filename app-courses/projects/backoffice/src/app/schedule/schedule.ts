import { Component } from '@angular/core';
import { Layout } from '../core/services/layout';
import { Title } from '../core/components/title/title';
import { Container } from '../core/components/container/container';

@Component({
  selector: 'bo-schedule',
  imports: [Title, Container],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css'
})
export class Schedule {
  constructor(private layout: Layout) {
    this.layout.showMenu.set(true);
    this.layout.showHeader.set(true);
  }
}
