import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTabSixComponent } from './customer-tab-six.component';

describe('CustomerTabSixComponent', () => {
  let component: CustomerTabSixComponent;
  let fixture: ComponentFixture<CustomerTabSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTabSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTabSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
