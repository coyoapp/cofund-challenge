import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
import {Observable} from 'rxjs';
import {Payout} from '../payout';
import {PayoutService} from '../payout.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './payout-list.component.html',
  styleUrls: ['./payout-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayoutListComponent implements OnInit {

  readonly columns: string[] = ['status-color', 'id', 'place', 'amount', 'status'];

  data$: Observable<Payout[]>;

  constructor(private payoutService: PayoutService) { }

  ngOnInit(): void {
   this.data$ = this.payoutService.getAll();
  }

  changeStatus(event: MatSelectChange, transaction: Payout) {
    const newStatus = event.value;
    if (this.isAccepted(newStatus)) {
      this.payoutService.accept(transaction).subscribe(acceptedPayout => {
        transaction = acceptedPayout;
      });
    } else if (this.isDeclined(newStatus)) {
      this.payoutService.decline(transaction).subscribe(declinedPayout => {
        transaction = declinedPayout;
      });
    }
  }

  private isAccepted(status: string): boolean {
    return status === 'ACCEPTED';
  }

  private isDeclined(status: string): boolean {
    return status === 'DECLINED';
  }
}
