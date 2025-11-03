import { inject, Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ExportOptions } from "../components/export-options/export-options";
import { Metadata } from "../types/metadata";

@Injectable({
    providedIn: 'root'
})
export class Utils {
    dialog = inject(MatDialog)
    snackBar = inject(MatSnackBar)
    bottomSheet = inject(MatBottomSheet)

    openModal(component: new (...args: any[]) => any, options: any = {}) {
        const reference = this.dialog.open(component, options)

        return reference;
    }

    showAlert(message: string) {
        this.snackBar.open(message, "", {
            duration: 1500,
        })
    }

    showExportOptions(parameters: {
        dataAll: any[],
        dataPage: any[],
        metadata: Metadata
    }) {
        this.bottomSheet.open(ExportOptions, {
            data: parameters
        })
    }
}                                                                                                                                      