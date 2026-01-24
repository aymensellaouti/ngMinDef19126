import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.service';
import { FiboPipe } from '../../pipes/fibo-pipe';



@Component({
  selector: 'app-usert-list-element-component',
  templateUrl: './usert-list-element-component.component.html',
  styleUrl: './usert-list-element-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FiboPipe]
})
export class UsertListElementComponentComponent {
  @Input() users: User[] = [];

}
