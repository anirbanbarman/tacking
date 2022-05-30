import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSideBarComponent } from './driver-side-bar.component';

describe('DriverSideBarComponent', () => {
  let component: DriverSideBarComponent;
  let fixture: ComponentFixture<DriverSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
