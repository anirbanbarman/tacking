import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMainContentComponent } from './customer-main-content.component';

describe('CustomerMainContentComponent', () => {
  let component: CustomerMainContentComponent;
  let fixture: ComponentFixture<CustomerMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
