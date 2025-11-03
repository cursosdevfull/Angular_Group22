import { Component, Injectable, input, output } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Injectable()
class CustomMatPaginatorIntl extends MatPaginatorIntl {
  override nextPageLabel = 'Siguiente página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primera página'
  override lastPageLabel = 'Última página'
  override itemsPerPageLabel = 'Items por página:';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    return `Página ${page + 1} de ${Math.ceil(length / pageSize)} | ${length}`;
  }
}


@Component({
  selector: 'bo-paginator',
  imports: [MatPaginatorModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
  ]
})
export class Paginator {
  length = input.required<number>();
  onPage = output<number>();
  //@Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  pageSize = 25;

  onChangePage(event: PageEvent) {
    this.onPage.emit(event.pageIndex);
  }
}
