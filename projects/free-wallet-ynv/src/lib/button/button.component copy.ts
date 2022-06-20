import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output()
  tap: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
}
