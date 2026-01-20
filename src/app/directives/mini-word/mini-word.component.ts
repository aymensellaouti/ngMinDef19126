import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule]
})
export class MiniWordComponent {
  //state
  color = signal('red');
  size = signal(75);
  fontFamily = signal('garamond');
}
