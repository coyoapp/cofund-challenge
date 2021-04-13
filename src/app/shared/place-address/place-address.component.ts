import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Place} from '../../places/place';

@Component({
  selector: 'cofund-place-address',
  templateUrl: './place-address.component.html',
  styleUrls: ['./place-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceAddressComponent implements OnInit {

  @Input()
  place: Place;

  constructor() { }

  ngOnInit(): void {
  }

}
