import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupHomeComponent } from './topup-home.component';

describe('TopupHomeComponent', () => {
  let component: TopupHomeComponent;
  let fixture: ComponentFixture<TopupHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
