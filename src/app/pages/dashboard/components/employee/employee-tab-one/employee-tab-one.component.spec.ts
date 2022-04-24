import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTabOneComponent } from './employee-tab-one.component';

describe('EmployeeTabOneComponent', () => {
  let component: EmployeeTabOneComponent;
  let fixture: ComponentFixture<EmployeeTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
