import {Place} from '../places/place';

export interface Transaction {
  id: string;
  amount: number;
  place: Place;
  status: string;
  // 'INITIALIZED' | 'PENDING' | 'CAPTURE_SUBMIT' | 'CAPTURE' | 'CANCEL_SUBMIT'
  // | 'CANCELED' | 'COMPLETED' | 'REFUND_SUBMIT' | 'REFUNDED';
}
