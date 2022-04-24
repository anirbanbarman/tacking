import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTabTwoComponent } from './employee-tab-two.component';

describe('EmployeeTabTwoComponent', () => {
  let component: EmployeeTabTwoComponent;
  let fixture: ComponentFixture<EmployeeTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTabTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
