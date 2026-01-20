import { Component } from '@angular/core';
import { Highlight } from "../highlight";

@Component({
  selector: 'app-ampoule',
  imports: [Highlight],
  templateUrl: './ampoule.html',
  styleUrl: './ampoule.css',
})
export class Ampoule {
  isOn = false;

  interrupteur() {
    this.isOn = !this.isOn;
  }
}
