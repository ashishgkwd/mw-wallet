import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupHomeContainerComponent } from './topup-home-container.component';

describe('TopupHomeContainerComponent', () => {
  let component: TopupHomeContainerComponent;
  let fixture: ComponentFixture<TopupHomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupHomeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
