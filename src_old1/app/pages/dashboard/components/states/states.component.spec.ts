import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { StatesComponent } from './states.component';

describe('statesComponent', () => {
  let component: StatesComponent;
  let fixture: ComponentFixture<StatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
