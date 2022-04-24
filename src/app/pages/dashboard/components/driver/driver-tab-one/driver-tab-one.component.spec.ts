import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTabOneComponent } from './driver-tab-one.component';

describe('DriverTabOneComponent', () => {
  let component: DriverTabOneComponent;
  let fixture: ComponentFixture<DriverTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
