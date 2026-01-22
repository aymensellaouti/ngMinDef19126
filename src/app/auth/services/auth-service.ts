import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app.api';
import { APP_CONSTANES } from '../../config/constantes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  isAuthenticated(): boolean {
    return !! localStorage.getItem(APP_CONSTANES.token);
  }
  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap(response => {
        localStorage.setItem(APP_CONSTANES.token, response.id);
      })
    );
  }

  logout() {
    localStorage.removeItem(APP_CONSTANES.token);
  }
}
