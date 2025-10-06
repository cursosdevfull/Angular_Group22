import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { interval, Observable, Observer, Subscriber, Subscription } from 'rxjs';

const timingPromise = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  timer = interval(1000)

  subscription!: Subscription

  observable = new Observable((observer: Subscriber<string>) => {
    timingPromise(2000).then(() => {
      observer.next('Dejaron las cuenta de uso de electricidad');
    });

    timingPromise(4000).then(() => {
      observer.next('La policía llegó a la casa preguntando por un persona desconocida');
    });

    timingPromise(6000).then(() => {
      observer.next("Llegó un aviso de corte de electricidad por falta de pago");
    })

    /*     timingPromise(8000).then(() => {
          observer.error('La casa se inundó por una fuga de agua');
        }) */

    timingPromise(10000).then(() => {
      observer.next("El servicio de electricidad fue restablecido");
    })

    timingPromise(12000).then(() => {
      observer.complete();
    })

    timingPromise(14000).then(() => {
      observer.next("Nueva observación después de completar");
    })
  })

  constructor() {
    /* this.observable.subscribe({
      next: (value) => console.log(value),
      error: error => console.error('Error en el observable', error),
      complete: () => console.log('El observable terminó')
    }) */

    this.subscription = this.timer.subscribe({ next: value => console.log("App", value) })
  }

  endSubscription() {
    this.subscription.unsubscribe()
  }
}
