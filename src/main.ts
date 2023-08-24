import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiRootModule} from '@taiga-ui/core';
import {AppComponent} from './app/app.component';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes), importProvidersFrom(TuiRootModule, BrowserAnimationsModule)],
}).catch(err => console.error(err));
