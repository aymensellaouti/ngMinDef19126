import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { CvComponent } from './cv/cv-component/cv-component';
import { Color } from './components/color/color';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { TodoComponent } from './todo/todo/todo.component';

export const routes: Routes = [
  {path: '', component: First},
  {path: 'cv', component: CvComponent},
  {path: 'color', component: Color},
  {path: 'word', component: MiniWordComponent},
  {path: 'todo', component: TodoComponent},
];
