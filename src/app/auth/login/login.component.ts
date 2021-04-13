import { TokenPayload } from './../auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cofund-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    token: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.credentials).subscribe(() => this.router.navigateByUrl(this.authService.redirectUrl || '/places'));
  }

  go(url): Promise<boolean> {
    return this.router.navigateByUrl(url);
  }
}
