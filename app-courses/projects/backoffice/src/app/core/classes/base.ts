import { computed, inject } from "@angular/core";
import { Utils } from "../services/utils";
import { Metadata } from "../types/metadata";
import { Layout } from "../services/layout";
import { Confirm } from "../components/confirm/confirm";

export abstract class Base<T extends { id: number }> {
    utilsService = inject(Utils);
    layoutService = inject(Layout)

    abstract metadata: Metadata

    pageSize = 25;

    dataSource = computed(() => this.service.list());
    dataSourceOriginal = computed(() => this.service.dataSourceOriginal);

    constructor(protected service: any, protected form: new (...args: any[]) => any) {
        this.layoutService.showMenu.set(true)
        this.layoutService.showHeader.set(true)
    }

    onPageChanged(pageIndex: number) {
        this.service.page = pageIndex;
    }

    openForm(row: T | null = null) {
        const reference = this.utilsService.openModal(this.form, { panelClass: "course-dialog", disableClose: true, data: row });

        reference.afterClosed().subscribe((result: T) => {
            if (!result) return;
            result.id ? this.service.editItem(result) : this.service.addItem(result);
        })
    }

    delete(row: T) {
        const reference = this.utilsService.openModal(Confirm, { disableClose: true });

        reference.componentInstance.message = "Are you sure?";

        reference.afterClosed().subscribe(result => {
            if (!result) return;
            this.service.deleteItem(row.id);
        })
    }
}