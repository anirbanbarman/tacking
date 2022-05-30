import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { BatterytypeComponent } from './batterytype.component';

describe('batterytypeComponent', () => {
  let component: BatterytypeComponent;
  let fixture: ComponentFixture<BatterytypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatterytypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
