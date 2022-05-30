import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { vehiclesaleComponent } from './vehiclesale.component';

describe('vehiclesaleComponent', () => {
  let component: vehiclesaleComponent;
  let fixture: ComponentFixture<vehiclesaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vehiclesaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vehiclesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
