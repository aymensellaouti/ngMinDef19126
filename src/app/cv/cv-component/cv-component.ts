import { Component, input, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Btc2usdPipe } from '../../pipes/btc2usd-pipe';

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard,CurrencyPipe, DatePipe,Btc2usdPipe, UpperCasePipe],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css',
})
export class CvComponent {
  today = new Date();
  cvs = signal<Cv[]>([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', 'rotating_card_profile3.png', 42),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', 'rotating_card_profile2.png', 5),
  ]);
  selectedCv = signal<Cv | null>(null);

  getSelectedCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}
