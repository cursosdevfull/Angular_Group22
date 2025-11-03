import { Component, inject } from '@angular/core';
import { Layout } from '../../services/layout';

@Component({
  selector: 'bo-lock-session',
  imports: [],
  templateUrl: './lock-session.html',
  styleUrl: './lock-session.css'
})
export class LockSession {
  layout = inject(Layout)

  constructor() {
    this.layout.showMenu.set(false)
    this.layout.showHeader.set(false)
  }
}
