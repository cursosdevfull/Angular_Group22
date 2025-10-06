import { Component, Inject, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyInject, User } from './app.config';
import { PaymentGateway } from './payment-gateway';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //url = inject("BASE_API_URL" as any)
  hour = inject("GET_HOUR" as any)
  user: User = inject("USER_SERVICE" as any)
  myInject: any = inject(MyInject)
  user2: User = inject(User)

  token = inject("USE_TOKEN" as any)

  paymentGateway = inject(PaymentGateway)

  protected readonly title = signal('appProviders');

  constructor(@Inject("BASE_API_URL") public url: any) {
    console.log("value this.url = ", this.url)
    console.log("value this.hour = ", this.hour)
    console.log("value this.user.getRandomName() = ", this.user.getRandomName())
    console.log("value this.myInject.getRandomName() = ", this.myInject.getRandomName())
    console.log("value this.user2.getRandomName() = ", this.user2.getRandomName())
    console.log("value this.token = ", this.token)
    console.log("value this.paymentGateway.processPayment(100) = ", this.paymentGateway.processPayment(100))
  }
}
