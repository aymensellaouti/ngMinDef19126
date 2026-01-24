import { Routes } from '@angular/router';








// /cv
export const routes: Routes = [
  {path: '', loadComponent: () => import('./components/first/first').then(m => m.First)},
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.routes').then(
      moduleJS => moduleJS.CV_ROUTES
    ),
    data: {
      preload: true
    }
  },
  {path: 'color', loadComponent: () => import('./components/color/color').then(m => m.Color), },
  {path: 'word', loadComponent: () => import('./directives/mini-word/mini-word.component').then(m => m.MiniWordComponent)},
  {path: 'todo', loadComponent: () => import('./todo/todo/todo.component').then(
    moduleJs => moduleJs.TodoComponent
  )},
  {path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login)},
  {path: 'cd', loadComponent: () => import('./change Detection/start-cd/start-cd.component').then(m => m.StartCdComponent)},
  {path: 'rh', loadComponent: () => import('./optimizationPattern/rh/rh.component').then(m => m.RhComponent)},
  {path: ':unParam', loadComponent: () => import('./components/second/second').then(m => m.Second)},
  {path: '**', loadComponent: () => import('./components/nf404/nf404').then(m => m.NF404)}
];
