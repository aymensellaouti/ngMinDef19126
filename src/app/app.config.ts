import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

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

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    {
      provide: CvService,
      useClass: APP_CONSTANES.env == 'dev' ?
        FakeCvService: CvService
    }
  ],
};
