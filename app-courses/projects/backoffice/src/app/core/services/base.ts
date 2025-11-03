import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { Utils } from "./utils";
import { ScheduleType } from "../../schedule/schedule-type";
import { delay, merge, Observable, Observer, switchMap, tap } from "rxjs";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService<Type extends { id: number }> {
    private utilsService = inject(Utils);

    abstract dataSourceOriginal: Type[]

    private add = signal<Type | null>(null);
    private edit = signal<Type | null>(null);
    private delete = signal<number | null>(null);
    private currentPage: WritableSignal<number> = signal<number>(0);
    private isLoading = signal<boolean>(false);

    private schedules$ = merge(toObservable(this.currentPage), toObservable(this.add), toObservable(this.edit), toObservable(this.delete)).pipe(
        tap(() => this.isLoading.set(true)),
        switchMap(() => new Observable((observer: Observer<Type[]>) => {
            const pageSize = 25;
            const startIndex = this.currentPage() * pageSize;
            observer.next(this.dataSourceOriginal.slice(startIndex, startIndex + pageSize));
        })),
        delay(700),
        tap(() => {
            this.isLoading.set(false);
            this.utilsService.showAlert("Data loaded successfully");
        })
    )

    list = toSignal(this.schedules$, { initialValue: [] });

    addItem(item: Type) {
        this.dataSourceOriginal.push({ ...item, id: Math.max(...this.dataSourceOriginal.map(t => t.id)) + 1 });
        this.add.set(item);
    }

    editItem(item: Type) {
        const index = this.dataSourceOriginal.findIndex(t => t.id === item.id);
        if (index !== -1) {
            this.dataSourceOriginal[index] = item;
            this.edit.set(item);
        }
    }

    deleteItem(id: number) {
        this.dataSourceOriginal = this.dataSourceOriginal.filter(t => t.id !== id);
        this.delete.set(id);
    }

    set page(pageIndex: number) {
        this.currentPage.set(pageIndex);
    }

    get length() {
        return this.dataSourceOriginal.length;
    }

    get statusLoading() {
        return this.isLoading();
    }
}