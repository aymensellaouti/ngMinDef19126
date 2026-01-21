import { Component, inject, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-item',
  imports: [],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  cv = input.required<Cv>();
  size = input(50);
  cvService = inject(CvService);
  // selectedCv = output<Cv>();

  selectCv() {
    this.cvService.selectCv(this.cv())
    // this.selectedCv.emit(this.cv());
  }
}
