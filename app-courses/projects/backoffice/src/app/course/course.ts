import { Component, inject } from '@angular/core';
import { Layout } from '../core/services/layout';
import { Title } from '../core/components/title/title';
import { Container } from '../core/components/container/container';
import { CourseService } from './course-service';

@Component({
  selector: 'bo-course',
  imports: [Title, Container],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {
  courseService = inject(CourseService)

  constructor(private layout: Layout) {
    this.layout.showMenu.set(true)
    this.layout.showHeader.set(true)
  }
}
