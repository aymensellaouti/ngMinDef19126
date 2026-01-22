import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';
import { APP_CONSTANES } from '../../config/constantes';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    const cloneReq = req.clone({
      setHeaders: {
        [APP_CONSTANES.loginHttpHeader]: localStorage.getItem(APP_CONSTANES.token) ?? '',
      },
    });
    return next(cloneReq);
  }
  return next(req);
};
