import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatSelectChange} from '@angular/material/select';
import {TransactionService} from '../../transaction/transaction.service';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cofund-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacesListComponent implements OnInit {

  readonly columns: string[] = ['status-color', 'company', 'address', 'id', 'status', 'pdf'];

  data$: Observable<Place[]>;

  constructor(private placeService: PlaceService,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.data$ = this.placeService.getAll();
    this.data$.subscribe(places => {
      this.transactionService.getAllByPlace(places[0]).subscribe(transactions => {console.log(transactions); });
      this.transactionService.getSummaryByPlace(places[0]).subscribe(transactionSummary => {console.log(transactionSummary); });
    });
  }

  changeStatus(event: MatSelectChange, place: Place) {
    const newStatus = event.value;
    if (this.isContacted(newStatus)) {
      this.placeService.approve(place).subscribe(approvedPlace => {
        place = approvedPlace;
      });
    } else if (this.isBlocked(newStatus)) {
      this.placeService.block(place).subscribe(blockedPlace => {
        place = blockedPlace;
      });
    }
  }

  downloadPdf(place: Place) {
    this.placeService.getInvitationLink(place).subscribe(invitationData => {
      window.open(invitationData.link);
    });
  }

  hasPdf(status: string): boolean {
    return this.isContacted(status);
  }

  private isContacted(status: string): boolean {
    return status === 'CONTACTED';
  }

  private isActive(status: string): boolean {
    return status === 'ACTIVE';
  }

  private isBlocked(status: string): boolean {
    return status === 'BLOCKED';
  }
}
