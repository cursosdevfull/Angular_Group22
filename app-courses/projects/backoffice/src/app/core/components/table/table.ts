import { Component, computed, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-om-perfect-scrollbar';
import { Metadata } from '../../types/metadata';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@Component({
  selector: 'bo-table',
  imports: [MatTableModule, PerfectScrollbarModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ]
})
export class Table {
  //displayedColumns = input.required<string[]>()
  metadata = input.required<Metadata>()
  dataSource = input.required<any[]>()

  displayedColumns = computed(() => this.metadata().map(item => item.field));


}
