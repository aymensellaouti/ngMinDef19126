import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '../../optimizationPattern/users.service';

@Component({
  selector: 'app-cd-fils',
  templateUrl: './cd-fils.component.html',
  styleUrl: './cd-fils.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdFilsComponent {
  name = input.required();
  user = input.required<User>()
}
