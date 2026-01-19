import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  imports: [FormsModule],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  private defaultColor = '#ff0000';
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
