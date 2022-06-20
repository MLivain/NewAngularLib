import { Component, Input, OnInit } from '@angular/core';
import { CurrencyModel } from '../models/currency.model';

@Component({
  selector: 'fwy-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency?:CurrencyModel;
  @Input() currencyToExchange?:CurrencyModel;
  @Input() exchangeRate?:number;
  constructor() { }

  ngOnInit(): void {
    
  }


}
