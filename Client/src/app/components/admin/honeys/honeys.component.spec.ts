import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneysComponent } from './honeys.component';

describe('HoneysComponent', () => {
  let component: HoneysComponent;
  let fixture: ComponentFixture<HoneysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
