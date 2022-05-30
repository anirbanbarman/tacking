import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { PolicytypeComponent } from './policytype.component';

describe('policytypeComponent', () => {
  let component: PolicytypeComponent;
  let fixture: ComponentFixture<PolicytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
