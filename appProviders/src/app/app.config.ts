import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providesPaymentGateway } from './payment-gateway';

export class User {
  getRandomName() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    return names[Math.floor(Math.random() * names.length)];
  }
}

/* export class MyInject {

} */

export const MyInject = new InjectionToken("MyInject");

export const GenerateProvide = (token: string): Provider => ({
  provide: "USE_TOKEN",
  useValue: token
})


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: 'BASE_API_URL',
      useValue: 'https://api.example.com'
    },
    {
      provide: "GET_HOUR",
      useFactory: () => new Date().getHours()
    },
    {
      provide: "USER_SERVICE",
      useClass: User
    },
    {
      provide: MyInject,
      useClass: User
    },
    User,
    GenerateProvide("This is a token from a function"),
    providesPaymentGateway('public_key_12345'),
  ]
};
