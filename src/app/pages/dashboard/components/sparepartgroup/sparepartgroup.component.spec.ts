import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { sparepartgroupComponent } from './sparepartgroup.component';

describe('sparepartgroupComponent', () => {
  let component: sparepartgroupComponent;
  let fixture: ComponentFixture<sparepartgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sparepartgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(sparepartgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
