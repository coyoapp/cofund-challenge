import { Injectable } from '@angular/core';
import { Payout } from '../../payout/payout';
import { Place } from '../../places/place';
import { Observable, of } from 'rxjs';
import { Transaction } from '../../transaction/transaction';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LocalStorageService {

  private static readonly STORAGE_KEY: string = 'cofund-challenge';
  private static readonly PAYOUTS_KEY: string = LocalStorageService.STORAGE_KEY + '.payouts';
  private static readonly PLACES_KEY: string = LocalStorageService.STORAGE_KEY + '.places';
  private static readonly TRANSACTIONS_KEY: string = LocalStorageService.STORAGE_KEY + '.transactions';

  createPayout(amount: number, place: Place, status: string): Observable<Payout> {
    const payouts = this.getPayouts();
    const payout = {id: uuid(), amount, place, status} as Payout;
    payouts.push(payout);
    this.storePayouts(payouts);
    return of(payout);
  }

  createPlace(placeId: string, company: string, address: string, zip: string, city: string, country: string,
              created: string, status: string): Observable<Place> {
    const places = this.getPlaces();
    const place = {id: uuid(), company, address, zip, city, country, created, status} as Place;
    places.push(place);
    this.storePlaces(places);
    return of(place);
  }

  createTransaction(amount: number, place: Place, status: string): Observable<Transaction> {
    const transactions = this.getTransactions();
    const transaction = {id: uuid(), amount, place, status} as Transaction;
    transactions.push(transaction);
    this.storeTransactions(transactions);
    return of(transaction);
  }

  deletePayouts(id: string): Observable<void> {
    const items = this.getPayouts();
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      this.storePayouts(items);
    }
    return of(null);
  }

  deletePlaces(id: string): Observable<void> {
    const items = this.getPlaces();
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      this.storePlaces(items);
    }
    return of(null);
  }

  deleteTransaction(id: string): Observable<void> {
    const items = this.getTransactions();
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      this.storeTransactions(items);
    }
    return of(null);
  }

  loadPayouts(): Observable<Payout[]> {
    return of(this.getPayouts());
  }

  loadPlaces(): Observable<Place[]> {
    return of(this.getPlaces());
  }

  loadTransactions(): Observable<Transaction[]> {
    return of(this.getTransactions());
  }

  private getPayouts():Payout[] {
    return LocalStorageService.get(LocalStorageService.PAYOUTS_KEY) as Payout[];
  }

  private getPlaces(): Place[] {
    return LocalStorageService.get(LocalStorageService.PLACES_KEY) as Place[];
  }

  private getTransactions(): Transaction[] {
    return LocalStorageService.get(LocalStorageService.TRANSACTIONS_KEY) as Transaction[];
  }

  private static get(key: string): unknown[] {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : [];
  }

  storePayouts(payouts: Payout[]): void {
    this.store(LocalStorageService.PAYOUTS_KEY, payouts);
  }

  storePlaces(places: Place[]): void {
    this.store(LocalStorageService.PLACES_KEY, places);
  }

  storeTransactions(transactions: Transaction[]): void {
    this.store(LocalStorageService.TRANSACTIONS_KEY, transactions);
  }

  private store(key: string, items: unknown[]): void {
    localStorage.setItem(key, JSON.stringify(items));
  }
}
