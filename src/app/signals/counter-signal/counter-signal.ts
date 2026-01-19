import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-signal',
  imports: [],
  templateUrl: './counter-signal.html',
  styleUrl: './counter-signal.css',
})
export class CounterSignal {
  counter = signal(0);

  increment() {
    this.counter.update(
      (valuer9dima) => valuer9dima + 1
    )
  }
  reset() {
    this.counter.set(0);
  }
}
