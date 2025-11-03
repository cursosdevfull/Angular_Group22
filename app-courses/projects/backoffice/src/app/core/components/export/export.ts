import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Utils } from '../../services/utils';
import { Metadata } from '../../types/metadata';

@Component({
  selector: 'bo-export',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './export.html',
  styleUrl: './export.css'
})
export class Export {
  dataSource = input.required<any[]>();
  dataSourceOriginal = input.required<any[]>();
  metadata = input.required<Metadata>()

  private utilsService = inject(Utils)

  showOptions() {
    this.utilsService.showExportOptions({
      dataAll: this.dataSourceOriginal(),
      dataPage: this.dataSource(),
      metadata: this.metadata()
    });
  }
}
