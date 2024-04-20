import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routerConfig from "./app/app.routes";
import { provideIonicAngular } from '@ionic/angular/standalone'
bootstrapApplication(AppComponent,{providers:[provideRouter(routerConfig), provideIonicAngular({})]})
  .catch((err) => console.error(err));

