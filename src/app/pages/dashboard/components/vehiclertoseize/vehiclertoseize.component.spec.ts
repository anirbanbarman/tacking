import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { vehiclertoseizeComponent } from './vehiclertoseize.component';

describe('vehiclertoseizeComponent', () => {
  let component: vehiclertoseizeComponent;
  let fixture: ComponentFixture<vehiclertoseizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vehiclertoseizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vehiclertoseizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
