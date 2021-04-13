import { Injectable } from '@angular/core';
import {Payout} from './payout';
import {Observable, of} from 'rxjs';
import payoutsData from '../../assets/payouts.json';

@Injectable({
  providedIn: 'root'
})
export class PayoutService {

  private payouts: Payout[] = payoutsData;

  constructor() { }

  getAll(): Observable<Payout[]> {
    return of(this.payouts);
  }

  accept(payout: Payout): Observable<Payout> {
    this.changeStatus(payout, 'ACCEPTED');
    return of(payout);
  }

  decline(payout: Payout): Observable<Payout> {
    this.changeStatus(payout, 'DECLINED');
    return of(payout);
  }

  private changeStatus(payout: Payout, status: string): void {
    const foundIndex = this.payouts.findIndex(p => p.id === payout.id);
    this.payouts[foundIndex].status = status;
  }
}
