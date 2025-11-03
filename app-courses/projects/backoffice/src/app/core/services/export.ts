import { Injectable } from "@angular/core";
import { Metadata } from "../types/metadata";
import * as xlsx from 'xlsx';

export enum ExportFormat {
    CSV = 'csv',
    XLSX = 'xlsx',
    PDF = 'pdf'
};

@Injectable({
    providedIn: 'root'
})
export class ExportService {
    exportData(data: any[], metadata: Metadata, format: ExportFormat) {
        console.log(`Exporting data in ${format} format`);
        // Implementation for exporting data goes here  
        console.log('Data:', data);
        console.log('Metadata:', metadata);

        const transformedData = data.map(item => {
            const props = Object.keys(item);

            const transformedItem: any = {};

            props.forEach(prop => {
                const meta = metadata.find(m => m.field === prop);
                if (meta) {
                    transformedItem[meta.title] = item[prop];
                }
            });

            return transformedItem;
        });

        if (format === ExportFormat.XLSX) {
            const worksheet = xlsx.utils.json_to_sheet(transformedData);
            const workbook = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(workbook, worksheet, 'Data');
            xlsx.writeFile(workbook, 'exported_data.xlsx');
        }
    }
}