import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTabTwoComponent } from './driver-tab-two.component';

describe('DriverTabTwoComponent', () => {
  let component: DriverTabTwoComponent;
  let fixture: ComponentFixture<DriverTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTabTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
