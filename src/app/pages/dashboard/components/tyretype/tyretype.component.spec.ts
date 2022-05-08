import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { TyretypeComponent } from './tyretype.component';

describe('tyretypeComponent', () => {
  let component: TyretypeComponent;
  let fixture: ComponentFixture<TyretypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyretypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyretypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
