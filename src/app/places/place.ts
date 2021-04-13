export interface Place {
  id: string;
  placeId: string;
  company: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  created: string; // Date;
  status: string; // 'NEW' | 'CONTACTED' | 'ACTIVE' | 'BLOCKED';
}
