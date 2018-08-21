import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupStatusContainerComponent } from './topup-status-container.component';

describe('TopupStatusContainerComponent', () => {
  let component: TopupStatusContainerComponent;
  let fixture: ComponentFixture<TopupStatusContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupStatusContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupStatusContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
