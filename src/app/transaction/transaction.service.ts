import { Injectable } from '@angular/core';
import {Place} from '../places/place';
import {Transaction} from './transaction';
import {Observable, of} from 'rxjs';
import transactionsData from '../../assets/transactions.json';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: Transaction[] = transactionsData;

  constructor() { }

  getAll(): Observable<Transaction[]> {
    return of(this.transactions);
  }

  getAllByPlace(place: Place): Observable<Transaction[]> {
    return of(this.transactions);
  }

  getSummaryByPlace(place: Place): Observable<Transaction[]> {
    return of(this.transactions);
  }

  accept(transaction: Transaction): Observable<Transaction> {
    this.changeStatus(transaction, 'COMPLETED');
    return of(transaction);
  }

  decline(transaction: Transaction): Observable<Transaction> {
    this.changeStatus(transaction, 'CANCELED');
    return of(transaction);
  }

  private changeStatus(transaction: Transaction, status: string): void {
    const foundIndex = this.transactions.findIndex(p => p.id === transaction.id);
    this.transactions[foundIndex].status = status;
  }
}
