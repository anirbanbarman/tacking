import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTabThreeComponent } from './customer-tab-three.component';

describe('CustomerTabThreeComponent', () => {
  let component: CustomerTabThreeComponent;
  let fixture: ComponentFixture<CustomerTabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTabThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
