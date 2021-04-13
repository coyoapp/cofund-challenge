import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cofund-token-request-success',
  templateUrl: './request-token-success.component.html',
  styleUrls: ['./request-token-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestTokenSuccessComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  go(url): Promise<boolean> {
    return this.router.navigateByUrl(url);
  }
}
