import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor() { }

  getPlacesCount(): Observable<number> {
    return of(4);
  }

  getTransactionsCount(): Observable<number> {
    return of(12);
  }

  getTransactionsSum(): Observable<number> {
    return of(179);
  }
}
