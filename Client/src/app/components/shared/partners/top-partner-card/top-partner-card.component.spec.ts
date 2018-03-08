import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPartnerCardComponent } from './top-partner-card.component';

describe('TopPartnerCardComponent', () => {
  let component: TopPartnerCardComponent;
  let fixture: ComponentFixture<TopPartnerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPartnerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPartnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
