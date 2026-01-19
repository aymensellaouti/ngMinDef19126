import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  private defaultColor = 'red';
  // état du composant
  color = this.defaultColor;

  // comportement
  changeColor(inputColor: HTMLInputElement): void {
    this.color = inputColor.value;
    inputColor.value = '';
  }

  resetColor() {
    this.color = this.defaultColor;
  }
}
