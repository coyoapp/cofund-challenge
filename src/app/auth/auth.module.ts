import { RequestTokenSuccessComponent } from './request-token-success/request-token-success.component';
import { RequestTokenComponent } from './request-token/request-token.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LoginComponent, RequestTokenComponent, RequestTokenSuccessComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
