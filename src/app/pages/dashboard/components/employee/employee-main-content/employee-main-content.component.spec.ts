import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMainContentComponent } from './employee-main-content.component';

describe('EmployeeMainContentComponent', () => {
  let component: EmployeeMainContentComponent;
  let fixture: ComponentFixture<EmployeeMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
