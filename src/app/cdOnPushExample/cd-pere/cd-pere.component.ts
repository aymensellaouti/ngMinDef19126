import { Component } from '@angular/core';
import { User } from '../../optimizationPattern/users.service';
import { FormsModule } from '@angular/forms';
import { CdFilsComponent } from "../cd-fils/cd-fils.component";

@Component({
  selector: 'app-cd-pere',
  templateUrl: './cd-pere.component.html',
  styleUrl: './cd-pere.component.css',
  imports: [FormsModule, CdFilsComponent],
})
export class CdPereComponent {
  name = 'aymen';
  user: User = {
    name: 'aymen@gmail.com',
    age: 43,
  };
  changeUserName(newName: string) {
    this.user = {
      ...this.user,
      name: newName
    }
  }
}
