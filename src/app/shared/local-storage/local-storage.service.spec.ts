import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Transaction } from '../../transaction/transaction';
import { v4 as uuid } from 'uuid';

describe('LocalStorageService', () => {
  const id = 'de4f576e-d1b5-488a-8c77-63d4c8726909';
  const place =  { id: uuid(), placeId: 'MXP123', company: 'COYO', address: 'Gasstrasse 6A', zip: '22761',
    city: 'Hamburg', country: 'DE', created: '1627982203', status: 'NEW'};
  const status = 'PENDING';
  const mockTransaction = `{"id":"${id}","status":"${status}"}`;

  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });

    localStorageService = TestBed.inject(LocalStorageService);
    spyOn(localStorage, 'getItem').and.callFake(() => `[${mockTransaction}]`);
    spyOn(localStorage, 'setItem').and.callFake(() => {});
  });

  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
  });

  it('should return transactions from local storage', () => {
    // when
    const transactionList$: Observable<Transaction[]> = localStorageService.loadTransactions();

    // then
    expect(localStorage.getItem).toHaveBeenCalled();
    transactionList$.subscribe(transactionList => {
      expect(transactionList.length).toBe(1);
      expect(transactionList[0].status).toEqual('PENDING');
    });
  });

  it('should write transaction to local storage', () => {
    // when
    localStorageService.createTransaction(26.99, place, 'PENDING');

    // then
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should delete transaction from local storage', () => {
    // when
    localStorageService.deleteTransaction(id);

    // then
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
