import { Routes } from '@angular/router';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv-component/cv-component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { authGuard } from '../auth/guards/auth-guard';
import { cvResolver } from './resolvers/cv-resolver';

export const CV_ROUTES: Routes = [
  { path: '', component: CvComponent },
  { path: 'add', component: AddCvComponent, canActivate: [authGuard] },
  {
    path: ':id',
    component: DetailsCvComponent,
    resolve: {
      cv: cvResolver,
    },
  },
];
