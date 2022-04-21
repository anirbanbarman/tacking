import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSideBarComponent } from './customer-side-bar.component';

describe('CustomerSideBarComponent', () => {
  let component: CustomerSideBarComponent;
  let fixture: ComponentFixture<CustomerSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
