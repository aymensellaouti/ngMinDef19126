import { ResolveFn, Router } from '@angular/router';
import { Cv } from '../model/cv';
import { inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { catchError, EMPTY } from 'rxjs';
import { APP_ROUTES } from '../../config/app.routes';

export const cvResolver: ResolveFn<Cv> = (route, state) => {
  const id = route.params['id'];
  const router = inject(Router);
  const cvService = inject(CvService);
  return cvService.getCvById(id).pipe(
    catchError((e) => {
      router.navigate([APP_ROUTES.cv]);
      return EMPTY;
    }),
  );
};
