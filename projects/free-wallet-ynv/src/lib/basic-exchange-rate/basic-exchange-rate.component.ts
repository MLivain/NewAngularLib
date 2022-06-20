import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {CurrencyModel} from "../models/currency.model";

@Component({
  selector: 'lib-basic-exchange-rate',
  templateUrl: './basic-exchange-rate.component.html',
  styleUrls: ['./basic-exchange-rate.component.css']
})
export class BasicExchangeRateComponent implements OnInit {

  CurrencyOne?="";
  CurrencyTwo?="";
  ExchangeRate?=0;
  selectedCurrencyToExchange?:CurrencyModel;

  @Input() currencies?:Array<CurrencyModel>;
  
  constructor() {}


  ngOnInit(): void {
  }

  updateSelectedCurrency(currency:CurrencyModel){
    this.selectedCurrencyToExchange = currency;
    if(this.currencies){
      this.currencies.forEach(element => {
        if(currency.valueUSD && element.valueUSD)
        element.exchangeRate = (1*element.valueUSD)/currency.valueUSD;
      });
    }
  }
}
