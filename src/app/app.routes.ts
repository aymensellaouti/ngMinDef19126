import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { CvComponent } from './cv/cv-component/cv-component';
import { Color } from './components/color/color';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { TodoComponent } from './todo/todo/todo.component';
import { Second } from './components/second/second';
import { CV_ROUTES } from './cv/cv.routes';
import { NF404 } from './components/nf404/nf404';
import { Login } from './auth/login/login';
import { StartCdComponent } from './change Detection/start-cd/start-cd.component';
import { RhComponent } from './optimizationPattern/rh/rh.component';
// /cv
export const routes: Routes = [
  {path: '', component: First},
  ...CV_ROUTES,
  {path: 'color', component: Color},
  {path: 'word', component: MiniWordComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: Login},
  {path: 'cd', component: StartCdComponent},
  {path: 'rh', component: RhComponent},
  {path: ':unParam', component: Second},
  {path: '**', component: NF404}
];
