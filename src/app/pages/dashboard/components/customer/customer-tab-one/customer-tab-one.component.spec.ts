import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTabOneComponent } from './customer-tab-one.component';

describe('CustomerTabOneComponent', () => {
  let component: CustomerTabOneComponent;
  let fixture: ComponentFixture<CustomerTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
