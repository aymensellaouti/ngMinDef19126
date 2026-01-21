import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-item',
  imports: [],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  cv = input.required<Cv>();
  size = input(50);
  selectedCv = output<Cv>();

  selectCv() {
    this.selectedCv.emit(this.cv());
  }
}
