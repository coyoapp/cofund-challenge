import { Injectable } from '@angular/core';
import {InvitationLink} from './invitation-link';
import { Place } from './place';
import { Observable, of } from 'rxjs';
import placesData from '../../assets/places.json';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private places: Place[] = placesData;

  constructor() { }

  getAll(): Observable<Place[]> {
    return of(this.places);
  }

  approve(place: Place): Observable<Place> {
    this.changeStatus(place, 'CONTACTED');
    return of(place);
  }

  block(place: Place): Observable<Place> {
    this.changeStatus(place, 'BLOCKED');
    return of(place);
  }

  getInvitationLink(place: Place): Observable<InvitationLink> {
    return of({ link: 'assets/cofund-invitation.pdf' } as InvitationLink);
  }

  private changeStatus(place: Place, status: string): void {
    const foundIndex = this.places.findIndex(p => p.id === place.id);
    this.places[foundIndex].status = status;
  }
}
