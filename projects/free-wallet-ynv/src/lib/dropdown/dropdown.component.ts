import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CurrencyModel } from '../models/currency.model';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'fw-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  form: FormControl= new FormControl();
  @Input() currencies?:Array<CurrencyModel>;
  @Output() selectedCurrency?:CurrencyModel;
  @Output() newSelectEvent = new EventEmitter<CurrencyModel>();
  
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    console.log(this.currencies);
    this.form.valueChanges.subscribe(value=>{ this.newSelectEvent.emit(value)});
  }
}
