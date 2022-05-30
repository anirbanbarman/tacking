import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTabOneComponent } from './supplier-tab-one.component';

describe('SupplierTabOneComponent', () => {
  let component: SupplierTabOneComponent;
  let fixture: ComponentFixture<SupplierTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
