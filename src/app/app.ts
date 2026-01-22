import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./components/first/first";
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";
import { Two } from "./components/two/two";
import { RotatingCard } from "./components/rotating-card/rotating-card";
import { CounterSignal } from "./signals/counter-signal/counter-signal";
import { SomComponent } from "./signals/som/som.component";
import { TtcComponent } from "./signals/ttc/ttc.component";
import { Pere } from "./communicationInterComposant/pere/pere";
import { CvComponent } from "./cv/cv-component/cv-component";
import { Style } from "./directives/style/style";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { Ampoule } from "./directives/ampoule/ampoule";
import { CvItem } from "./cv/cv-item/cv-item";
import { TodoComponent } from "./todo/todo/todo.component";
import { CvCard } from "./cv/cv-card/cv-card";
import { WeekTodoComponent } from "./todo/week-todo/week-todo.component";
import { Header } from "./components/header/header";
import { TestForm } from "./templateDrivenForm/test-form/test-form";
import { TestObservable } from "./rxjs/test-observable/test-observable";
import { SliderComponent } from "./rxjs/slider/slider.component";

@Component({
  selector: 'app-root',
  imports: [CvComponent, Style, MiniWordComponent, Ampoule, CvItem, TodoComponent, CvCard, WeekTodoComponent, RouterOutlet, Header, TestForm, TestObservable, SliderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //state
  protected readonly title = signal('ngMinDef19126');

  // behaviour
}
