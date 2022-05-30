import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { vehicleinitialexpensesComponent } from './vehicleinitialexpenses.component';

describe('vehicleinitialexpensesComponent', () => {
  let component: vehicleinitialexpensesComponent;
  let fixture: ComponentFixture<vehicleinitialexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vehicleinitialexpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vehicleinitialexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
