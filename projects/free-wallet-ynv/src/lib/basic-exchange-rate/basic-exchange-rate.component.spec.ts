import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExchangeRateComponent } from './basic-exchange-rate.component';

describe('BasicExchangeRateComponent', () => {
  let component: BasicExchangeRateComponent;
  let fixture: ComponentFixture<BasicExchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicExchangeRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
