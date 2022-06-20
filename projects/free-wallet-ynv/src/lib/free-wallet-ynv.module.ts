import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FreeWalletYnvComponent } from './free-wallet-ynv.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { BasicExchangeRateComponent } from './basic-exchange-rate/basic-exchange-rate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyCardComponent } from './currency-card/currency-card.component';


@NgModule({
  declarations: [
    FreeWalletYnvComponent,
    ButtonComponent,
    DropdownComponent,
    BasicExchangeRateComponent,
    CurrencyCardComponent
  ],
  imports: [
    CommonModule,
     ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FreeWalletYnvComponent,
    ButtonComponent,
    DropdownComponent,
    BasicExchangeRateComponent
  ]
})
export class FreeWalletYnvModule { }
