import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cofund-request-token',
  templateUrl: './request-token.component.html',
  styleUrls: ['./request-token.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestTokenComponent implements OnInit {

  credentials = {
    email: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  requestToken(): void {
    this.authService.requestToken(this.credentials.email).subscribe(() => this.router.navigateByUrl('/request-token-success'));
  }
}
