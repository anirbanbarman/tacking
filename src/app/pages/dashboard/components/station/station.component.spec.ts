import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { vehicletyperateComponent } from './vehicletyperate.component';

describe('vehicletyperateComponent', () => {
  let component: vehicletyperateComponent;
  let fixture: ComponentFixture<vehicletyperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vehicletyperateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vehicletyperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
