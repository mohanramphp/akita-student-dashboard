import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableAkitaProdMode } from '@datorama/akita';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode(); // In dev mode, Akita will deep freeze the store's value to avoid store mutations.
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
