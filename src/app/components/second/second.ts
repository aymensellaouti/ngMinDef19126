import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  template: ` <p>second works : {{ name() }}</p> `,
  styles: ``,
})
export class Second {
  name = signal('');
  acr = inject(ActivatedRoute);
  constructor() {
    this.name.set(this.acr.snapshot.params['unParam']);
  }
}
