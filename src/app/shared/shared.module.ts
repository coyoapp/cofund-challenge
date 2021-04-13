import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceAddressComponent } from './place-address/place-address.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';

@NgModule({
  declarations: [
    PlaceAddressComponent,
    LayoutComponent,
    StatusIndicatorComponent
  ],
  exports: [
    PlaceAddressComponent,
    LayoutComponent,
    StatusIndicatorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }
