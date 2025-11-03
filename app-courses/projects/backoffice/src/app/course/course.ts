import { Component } from '@angular/core';
import { Title } from '../core/components/title/title';
import { Container } from '../core/components/container/container';
import { CourseService } from './course-service';
import { Table } from '../core/components/table/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Metadata } from '../core/types/metadata';
import { Paginator } from '../core/components/paginator/paginator';
import { Loader } from '../core/components/loader/loader';
import { CourseForm } from './course-form/course-form';
import { CourseType } from './course-type';
import { Base } from '../core/classes/base';
import { Export } from '../core/components/export/export';

@Component({
  selector: 'bo-course',
  imports: [Title, Container, Table, MatTableModule, MatButtonModule, MatIconModule, Paginator, Loader, Export],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course extends Base<CourseType> {
  metadata: Metadata = [
    { title: "Course ID", field: "id" },
    { title: "Title", field: "name" },
  ]

  constructor(protected courseService: CourseService) {
    super(courseService, CourseForm)
  }
}
