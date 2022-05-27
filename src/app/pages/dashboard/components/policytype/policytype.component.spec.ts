import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { policytypeComponent } from './policytype.component';

describe('policytypeComponent', () => {
  let component: policytypeComponent;
  let fixture: ComponentFixture<policytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ policytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(policytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
