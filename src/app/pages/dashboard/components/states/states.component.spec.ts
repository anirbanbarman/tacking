import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { statesComponent } from './states.component';

describe('statesComponent', () => {
  let component: statesComponent;
  let fixture: ComponentFixture<statesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ statesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(statesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
