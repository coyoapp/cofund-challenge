import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestTokenSuccessComponent} from './auth/request-token-success/request-token-success.component';
import {RequestTokenComponent} from './auth/request-token/request-token.component';
import {PayoutListComponent} from './payout/payout-list/payout-list.component';
import {StatisticComponent} from './statistic/statistic.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { PlacesListComponent } from './places/places-list/places-list.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'request-token',
  component: RequestTokenComponent,
},
{
  path: 'request-token-success',
  component: RequestTokenSuccessComponent,
},
{
  path: '',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'places', component: PlacesListComponent },
      { path: 'transactions', component: TransactionListComponent },
      { path: 'payouts', component: PayoutListComponent },
      { path: 'statistics', component: StatisticComponent }
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
