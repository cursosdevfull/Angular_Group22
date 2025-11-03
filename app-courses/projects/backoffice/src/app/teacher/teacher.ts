import { Component, computed, inject } from '@angular/core';
import { Container } from '../core/components/container/container';
import { Title } from '../core/components/title/title';
import { Metadata } from '../core/types/metadata';
import { Table } from '../core/components/table/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Paginator } from '../core/components/paginator/paginator';
import { TeacherService } from './teacher-service';
import { Loader } from '../core/components/loader/loader';
import { TeacherForm } from './teacher-form/teacher-form';
import { TeacherType } from './teacher-type';
import { Base } from '../core/classes/base';
import { Export } from '../core/components/export/export';

@Component({
  selector: 'bo-teacher',
  imports: [Title, Container, Table, MatTableModule, MatButtonModule, MatIconModule, Paginator, Loader, Export],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher extends Base<TeacherType> {
  metadata: Metadata = [
    { title: "Teacher ID", field: "id" },
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Department", field: "department" }
  ]

  constructor(protected teacherService: TeacherService) {
    super(teacherService, TeacherForm)
  }
}
