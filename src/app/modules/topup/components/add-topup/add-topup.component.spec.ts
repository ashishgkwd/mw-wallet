import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopupComponent } from './add-topup.component';

describe('AddTopupComponent', () => {
  let component: AddTopupComponent;
  let fixture: ComponentFixture<AddTopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
