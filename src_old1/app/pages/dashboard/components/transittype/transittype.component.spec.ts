import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { transittypeComponent } from './transittype.component';

describe('transittypeComponent', () => {
  let component: transittypeComponent;
  let fixture: ComponentFixture<transittypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ transittypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(transittypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
