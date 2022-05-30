import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { branchComponent } from './branch.component';

describe('branchComponent', () => {
  let component: branchComponent;
  let fixture: ComponentFixture<branchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ branchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(branchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
