import { Routes } from '@angular/router';

import { CvComponent } from './cv-component/cv-component';

import { authGuard } from '../auth/guards/auth-guard';
import { cvResolver } from './resolvers/cv-resolver';

export const CV_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./add-cv/add-cv.component').then(m => m.AddCvComponent) },
  { path: 'add', loadComponent: () => import('./add-cv/add-cv.component').then(m => m.AddCvComponent), canActivate: [authGuard] },
  {
    path: ':id',
    loadComponent: () => import('./details-cv/details-cv.component').then(m => m.DetailsCvComponent),
    resolve: {
      cv: cvResolver,
    },
  },
];
