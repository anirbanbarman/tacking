import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { sparepartrepairComponent } from './sparepartrepair.component';

describe('sparepartrepairComponent', () => {
  let component: sparepartrepairComponent;
  let fixture: ComponentFixture<sparepartrepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sparepartrepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(sparepartrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
