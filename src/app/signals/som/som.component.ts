import { afterRenderEffect, Component, computed, effect, ElementRef, signal, ViewChild, viewChild, viewChildren, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.component.html',
  styleUrl: './som.component.css',
})
export class SomComponent {
  update() {}
  x = signal(3);
  y = signal(5);
  z = computed(() =>this.x() + this.y());
  doubleZ = computed(() => 2 * this.z())
}
