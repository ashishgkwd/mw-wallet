import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupPaymentContainerComponent } from './topup-payment-container.component';

describe('TopupPaymentContainerComponent', () => {
  let component: TopupPaymentContainerComponent;
  let fixture: ComponentFixture<TopupPaymentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupPaymentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupPaymentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
