import { routes } from './app/app.routes';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Aquí activamos el HashLocationStrategy 👇
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};