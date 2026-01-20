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
  /**
   * Représente la couleur du background de la div
   */
  color = this.defaultColor;

  // comportement
  /**
   * Elle change la couleur de la div puis reset l'input
   * @param inputColor : l'input à gérer
   */
  changeColor(inputColor: HTMLInputElement): void {
    this.color = inputColor.value;
    inputColor.value = '';
  }

  resetColor() {
    this.color = this.defaultColor;
  }
}
