import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { tyretypeComponent } from './tyretype.component';

describe('tyretypeComponent', () => {
  let component: tyretypeComponent;
  let fixture: ComponentFixture<tyretypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tyretypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tyretypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
