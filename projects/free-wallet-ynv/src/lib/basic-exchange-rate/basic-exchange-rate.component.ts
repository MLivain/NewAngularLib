import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {CurrencyModel} from "../models/currency.model";

@Component({
  selector: 'lib-basic-exchange-rate',
  templateUrl: './basic-exchange-rate.component.html',
  styleUrls: ['./basic-exchange-rate.component.css']
})
export class BasicExchangeRateComponent implements OnInit {

  exchangeValue=1;
  selectedCurrencyToExchange?:CurrencyModel;

  @Input() currencies?:Array<CurrencyModel>;
  
  constructor() {}


  ngOnInit(): void {
  }

  updateSelectedCurrency(currency?:CurrencyModel,value?:number){
    this.selectedCurrencyToExchange = currency;
    if(value)
    this.exchangeValue = value;
    if(this.currencies && currency){
      this.currencies.forEach(element => {
        if(currency.valueUSD && element.valueUSD)
        element.exchangeRate = ((1*element.valueUSD)/currency.valueUSD)*this.exchangeValue;
      });
    }
  }

  updateSelectedCurrencyValue(){
    let value:number = +(<HTMLInputElement>document.getElementById("myExchangeInputValue")).value;
    if(value)
    this.exchangeValue = value;
    if(this.currencies && this.selectedCurrencyToExchange && this.selectedCurrencyToExchange.valueUSD){
      this.currencies.forEach(element => {
        if(this.selectedCurrencyToExchange)
        if(this.selectedCurrencyToExchange.valueUSD && element.valueUSD)
        element.exchangeRate = ((1*element.valueUSD)/this.selectedCurrencyToExchange.valueUSD)*this.exchangeValue;
      });
    }
  }
}
