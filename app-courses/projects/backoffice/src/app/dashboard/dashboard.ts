import { Component } from '@angular/core';
import { Layout } from '../core/services/layout';
import { Title } from '../core/components/title/title';
import { Container } from '../core/components/container/container';

@Component({
  selector: 'bo-dashboard',
  imports: [Title, Container],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private layout: Layout) {
    this.layout.showMenu.set(true)
    this.layout.showHeader.set(true)
  }
}
