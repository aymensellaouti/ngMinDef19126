import { AsyncPipe } from '@angular/common';
import { Component,  input } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  imports: [AsyncPipe]
})
export class SliderComponent {
  timerDelay = input(1000);
  size = input(150);
  imagesArray = input([
    'as.jpg',
    '404.png',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ]);
  images$: Observable<string> = timer(0, this.timerDelay()).pipe(
    // 0 1 2 3 4 5 6
    map((index) => this.imagesArray()[index % this.imagesArray().length]),
    // path1 path2 ..... path1 path2 ....
  );
}

