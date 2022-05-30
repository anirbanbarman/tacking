import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { vehiclepermitComponent } from './vehiclepermit.component';

describe('vehiclepermitComponent', () => {
  let component: vehiclepermitComponent;
  let fixture: ComponentFixture<vehiclepermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ vehiclepermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(vehiclepermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
