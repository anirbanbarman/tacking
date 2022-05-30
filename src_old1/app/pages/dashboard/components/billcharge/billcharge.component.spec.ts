import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { billchargeComponent } from './billcharge.component';

describe('billchargeComponent', () => {
  let component: billchargeComponent;
  let fixture: ComponentFixture<billchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ billchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(billchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
