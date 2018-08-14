import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupContainerComponent } from './topup-container.component';

describe('TopupContainerComponent', () => {
  let component: TopupContainerComponent;
  let fixture: ComponentFixture<TopupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
