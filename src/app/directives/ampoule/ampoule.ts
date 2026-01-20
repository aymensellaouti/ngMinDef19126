import { Component } from '@angular/core';

@Component({
  selector: 'app-ampoule',
  imports: [],
  templateUrl: './ampoule.html',
  styleUrl: './ampoule.css',
})
export class Ampoule {
  isOn = false;

  interrupteur() {
    this.isOn = !this.isOn;
  }
}
