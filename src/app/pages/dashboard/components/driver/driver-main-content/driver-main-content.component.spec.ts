import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMainContentComponent } from './driver-main-content.component';

describe('DriverMainContentComponent', () => {
  let component: DriverMainContentComponent;
  let fixture: ComponentFixture<DriverMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
