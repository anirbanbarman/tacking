import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTabThreeComponent } from './driver-tab-three.component';

describe('DriverTabThreeComponent', () => {
  let component: DriverTabThreeComponent;
  let fixture: ComponentFixture<DriverTabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTabThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
