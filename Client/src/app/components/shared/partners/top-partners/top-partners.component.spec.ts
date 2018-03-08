import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPartnersComponent } from './top-partners.component';

describe('TopPartnersComponent', () => {
  let component: TopPartnersComponent;
  let fixture: ComponentFixture<TopPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
