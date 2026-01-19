import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./components/first/first";
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, First, Second, Color],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngMinDef19126');
}
