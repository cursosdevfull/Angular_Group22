import { Component } from '@angular/core';
import { Layout } from '../core/services/layout';
import { Title } from '../core/components/title/title';
import { Container } from '../core/components/container/container';

@Component({
  selector: 'bo-course',
  imports: [Title, Container],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {
  constructor(private layout: Layout) {
    this.layout.showMenu = true
    this.layout.showHeader = true
  }
}
