import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { Layout } from './core/services/layout';

@Component({
  selector: 'bo-root',
  imports: [RouterOutlet, MatSidenavModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isSidenavOpened = false

  constructor(public layout: Layout) { }

}
