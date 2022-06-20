import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWalletYnvComponent } from './free-wallet-ynv.component';

describe('FreeWalletYnvComponent', () => {
  let component: FreeWalletYnvComponent;
  let fixture: ComponentFixture<FreeWalletYnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeWalletYnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeWalletYnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
