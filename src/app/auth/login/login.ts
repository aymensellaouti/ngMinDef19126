import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from '../dto/credentials.dto';
import { APP_ROUTES } from '../../config/app.routes';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);

  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next:(loginResponse) => {
        // neb3thouh lel page d'accueil
        this.toastr.success('Bienvenu dans votre compte :D');
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Veuillez vérifier vos credentials');
      }
    })
  }
}
