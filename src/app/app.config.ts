import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './services/logger.service';
import { SayHelloService } from './services/sayHello.service';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptor/auth-interceptor';
import { CvService } from './cv/services/cv.service';
import { APP_CONSTANES } from './config/constantes';
import { FakeCvService } from './cv/services/fake-cv.service';
import { UUID_TOKEN } from './injectionTokens/uuid.injection-token';
import {v4 as uuidV4} from 'uuid';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  // your configuration here
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: CvService,
      useClass: APP_CONSTANES.env == 'dev' ? FakeCvService : CvService,
    },
    {
      provide: UUID_TOKEN,
      useValue: uuidV4,
    },
  ],
};
