import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { brokerAllComponent } from './broker-all.component';

describe('brokerAllComponent', () => {
  let component: brokerAllComponent;
  let fixture: ComponentFixture<brokerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ brokerAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(brokerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
