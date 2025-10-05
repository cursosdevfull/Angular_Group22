import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Layout {
  showMenu = signal<boolean>(true);
  showHeader = signal<boolean>(true);
}
