import { Component, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Metadata } from '../../types/metadata';
import { ExportFormat, ExportService } from '../../services/export';

@Component({
  selector: 'bo-export-options',
  imports: [MatBottomSheetModule, MatListModule, MatIconModule],
  templateUrl: './export-options.html',
  styleUrl: './export-options.css'
})
export class ExportOptions {
  private bottomSheetRef = inject<MatBottomSheetRef<ExportOptions>>(MatBottomSheetRef);
  data = inject(MAT_BOTTOM_SHEET_DATA)
  exportService = inject(ExportService)


  exportCurrentPage() {
    this.export(this.data.dataPage, this.data.metadata, ExportFormat.XLSX);
    this.bottomSheetRef.dismiss();
  }

  exportAll() {
    this.export(this.data.dataAll, this.data.metadata, ExportFormat.XLSX);
    this.bottomSheetRef.dismiss();
  }

  private export(data: any[], metadata: Metadata, format: ExportFormat) {
    this.exportService.exportData(data, metadata, format);
  }
}
