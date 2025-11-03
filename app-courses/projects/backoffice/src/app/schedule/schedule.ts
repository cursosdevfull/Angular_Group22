import { Component, computed, inject } from '@angular/core';
import { Container } from '../core/components/container/container';
import { Title } from '../core/components/title/title';
import { Layout } from '../core/services/layout';
import { Metadata } from '../core/types/metadata';
import { Table } from '../core/components/table/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Paginator } from '../core/components/paginator/paginator';
import { ScheduleService } from './schedule-service';
import { Loader } from '../core/components/loader/loader';
import { Confirm } from '../core/components/confirm/confirm';
import { Utils } from '../core/services/utils';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ScheduleForm } from './schedule-form/schedule-form';
import { ScheduleType } from './schedule-type';
import { Base } from '../core/classes/base';
import { Export } from '../core/components/export/export';

@Component({
  selector: 'bo-schedule',
  imports: [Title, Container, Table, MatTableModule, MatButtonModule, MatIconModule, Paginator, Loader, Export],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css'
})
export class Schedule extends Base<ScheduleType> {
  metadata: Metadata = [
    { title: "Schedule ID", field: "id" },
    { title: "Course's Name", field: "course" },
    { title: "Teacher", field: "instructor", pipe: this.getTitleCase.bind(this) },
    { title: "Hours", field: "time" },
    { title: "Frequency", field: "days" }
  ]

  instanceUpperCasePipe = new UpperCasePipe()
  instanceTitleCasePipe = new TitleCasePipe()

  constructor(protected scheduleService: ScheduleService) {
    super(scheduleService, ScheduleForm)
  }

  getUpperCase(value: string): string {
    return this.instanceUpperCasePipe.transform(value) || '';
  }

  getTitleCase(value: string): string {
    return this.instanceTitleCasePipe.transform(value) || '';
  }
}