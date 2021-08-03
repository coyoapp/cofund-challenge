import { BasicAuthHttpInterceptorService } from './auth/basic-auth-interceptor.service';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {PayoutModule} from './payout/payout.module';
import { TransactionModule } from './transaction/transaction.module';
import { PlacesModule } from './places/places.module';
import { AuthModule } from './auth/auth.module';
import { StatisticComponent } from './statistic/statistic.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule,
    PlacesModule,
    PayoutModule,
    TransactionModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
