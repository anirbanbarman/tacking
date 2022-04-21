import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTabFourComponent } from './customer-tab-four.component';

describe('CustomerTabFourComponent', () => {
  let component: CustomerTabFourComponent;
  let fixture: ComponentFixture<CustomerTabFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTabFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTabFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
