import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTabFourComponent } from './supplier-tab-four.component';

describe('supplierTabFourComponent', () => {
  let component: SupplierTabFourComponent;
  let fixture: ComponentFixture<SupplierTabFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTabFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTabFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
