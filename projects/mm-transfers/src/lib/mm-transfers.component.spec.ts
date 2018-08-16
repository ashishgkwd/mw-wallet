import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmTransfersComponent } from './mm-transfers.component';

describe('MmTransfersComponent', () => {
  let component: MmTransfersComponent;
  let fixture: ComponentFixture<MmTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
