import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTabFiveComponent } from './driver-tab-five.component';

describe('DriverTabFiveComponent', () => {
  let component: DriverTabFiveComponent;
  let fixture: ComponentFixture<DriverTabFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTabFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTabFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
