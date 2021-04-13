import {Place} from '../places/place';

export interface Payout {
  id: string;
  amount: number;
  place: Place;
  status: string; // 'PENDING' | 'ACCEPTED' | 'PAID' | 'DECLINED';
}
