import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { vehiclebodyComponent } from './vehiclebody.component';

describe('vehiclebodyComponent', () => {
  let component: vehiclebodyComponent;
  let fixture: ComponentFixture<vehiclebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vehiclebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vehiclebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
