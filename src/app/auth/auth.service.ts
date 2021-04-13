import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() {}

  // Provide token for authentication, and once authentication is successful, store JWT token in session
  private saveToken(token: string): void {
    const tokenStr = 'Bearer ' + token;
    sessionStorage.setItem('token', tokenStr);
  }

  login(tokenPayload: TokenPayload) {
    this.saveToken(tokenPayload.token);
    return of(tokenPayload);
  }

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== null;
  }

  logout(): void {
    sessionStorage.removeItem('token');
  }

  requestToken(email): Observable<TokenPayload> {
    return of({ token: 'token-' + email } as TokenPayload);
  }
}

export interface TokenPayload {
  token: string;
}
