import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en'
      })
    ),

    // Loader HTTP con la configuración por defecto:
    // assets/i18n/<lang>.json
    provideTranslateHttpLoader()
    // si quieres ser explícito:
    // provideTranslateHttpLoader({ prefix: 'assets/i18n/', suffix: '.json' })
  ],
}).catch(err => console.error(err));
