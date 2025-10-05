import { Component } from '@angular/core';
import { Container } from '../core/components/container/container';
import { Title } from '../core/components/title/title';
import { Layout } from '../core/services/layout';

@Component({
  selector: 'bo-teacher',
  imports: [Title, Container],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher {
  constructor(private layout: Layout) {
    this.layout.showMenu.set(true)
    this.layout.showHeader.set(true)
  }
}
