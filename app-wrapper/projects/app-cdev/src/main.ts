import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Login } from './app/login/login';
import { Register } from './app/register/register';
import { ProductList } from './app/product-list/product-list';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
