import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipRequestsComponent } from './partnership-requests.component';

describe('PartnershipRequestsComponent', () => {
  let component: PartnershipRequestsComponent;
  let fixture: ComponentFixture<PartnershipRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
