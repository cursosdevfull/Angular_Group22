import { Component, computed, contentChildren, effect, input, signal, viewChild } from '@angular/core';
import { MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
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
  metadata = input.required<Metadata>()
  dataSource = input.required<any[]>()

  //displayedColumns = computed(() => this.metadata().map(item => item.field));
  displayedColumns = signal<string[]>([])

  columnsDefs = contentChildren<MatColumnDef>(MatColumnDef)
  table = viewChild.required<MatTable<any>>(MatTable)

  constructor() {
    effect(() => {
      const columns = this.metadata().map(item => item.field)
      this.displayedColumns.set(columns)
    })

    effect(() => {
      const columns = this.columnsDefs()

      if (columns) {
        columns.forEach(col => {
          if (!this.displayedColumns().includes(col.name)) {
            this.table().addColumnDef(col)
            this.displayedColumns.update(value => [...value, col.name])
          }
        })
      }
    })
  }

}
