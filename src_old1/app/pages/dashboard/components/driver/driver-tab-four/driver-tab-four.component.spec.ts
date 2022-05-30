import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTabFourComponent } from './driver-tab-four.component';

describe('DriverTabFourComponent', () => {
  let component: DriverTabFourComponent;
  let fixture: ComponentFixture<DriverTabFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTabFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTabFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
