import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeekeeperRegisterComponent } from './beekeeper-register.component';

describe('BeekeeperRegisterComponent', () => {
  let component: BeekeeperRegisterComponent;
  let fixture: ComponentFixture<BeekeeperRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeekeeperRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeekeeperRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
