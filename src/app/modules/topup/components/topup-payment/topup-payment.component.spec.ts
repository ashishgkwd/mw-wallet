import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupPaymentComponent } from './topup-payment.component';

describe('TopupPaymentComponent', () => {
  let component: TopupPaymentComponent;
  let fixture: ComponentFixture<TopupPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
