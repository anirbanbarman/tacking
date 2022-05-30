import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTabTwoComponent } from './customer-tab-two.component';

describe('CustomerTabTwoComponent', () => {
  let component: CustomerTabTwoComponent;
  let fixture: ComponentFixture<CustomerTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTabTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
