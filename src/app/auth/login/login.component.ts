import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, TokenPayload } from '../auth.service';

@Component({
  selector: 'cofund-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  credentials: TokenPayload = {
    token: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.credentials).subscribe(() => this.router.navigateByUrl(this.authService.redirectUrl || '/home'));
  }

  go(url): Promise<boolean> {
    return this.router.navigateByUrl(url);
  }
}
