import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  @Input() timer = 1000;
  @Input() size = 150;
  @Input() imagesArray = [
    'as.jpg',
    '404.png',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  images$: Observable<string> =

}

