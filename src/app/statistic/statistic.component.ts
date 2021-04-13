import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {StatisticService} from './statistic.service';

@Component({
  selector: 'cofund-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticComponent implements OnInit {

  placeCount$: Observable<number>;
  transactionsCount$: Observable<number>;
  transactionsSum$: Observable<number>;

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.placeCount$ = this.statisticService.getPlacesCount();
    this.transactionsCount$ = this.statisticService.getTransactionsCount();
    this.transactionsSum$ = this.statisticService.getTransactionsSum();
  }
}
