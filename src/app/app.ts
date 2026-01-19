import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./components/first/first";
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";
import { Two } from "./components/two/two";
import { RotatingCard } from "./components/rotating-card/rotating-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, Second, Color, Two, RotatingCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngMinDef19126');
}
