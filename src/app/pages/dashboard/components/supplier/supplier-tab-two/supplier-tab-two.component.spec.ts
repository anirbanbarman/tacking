import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTabTwoComponent } from './supplier-tab-two.component';

describe('SupplierTabTwoComponent', () => {
  let component: SupplierTabTwoComponent;
  let fixture: ComponentFixture<SupplierTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTabTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
