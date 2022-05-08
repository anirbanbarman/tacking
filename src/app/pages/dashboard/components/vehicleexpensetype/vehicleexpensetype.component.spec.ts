import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { VehicleexpensetypeComponent } from './vehicleexpensetype.component';

describe('vehicleexpensetypeComponent', () => {
  let component: VehicleexpensetypeComponent;
  let fixture: ComponentFixture<VehicleexpensetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleexpensetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleexpensetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
