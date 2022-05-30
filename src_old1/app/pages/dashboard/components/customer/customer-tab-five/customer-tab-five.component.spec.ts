import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTabFiveComponent } from './customer-tab-five.component';

describe('CustomerTabFiveComponent', () => {
  let component: CustomerTabFiveComponent;
  let fixture: ComponentFixture<CustomerTabFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTabFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTabFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
