import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { parametersComponent } from './parameters.component';

describe('parametersComponent', () => {
  let component: parametersComponent;
  let fixture: ComponentFixture<parametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ parametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(parametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
