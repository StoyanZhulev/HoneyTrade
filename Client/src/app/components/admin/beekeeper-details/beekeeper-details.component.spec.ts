import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeekeeperDetailsComponent } from './beekeeper-details.component';

describe('BeekeeperDetailsComponent', () => {
  let component: BeekeeperDetailsComponent;
  let fixture: ComponentFixture<BeekeeperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeekeeperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeekeeperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
