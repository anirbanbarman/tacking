import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTabFiveComponent } from './supplier-tab-five.component';

describe('SupplierTabFiveComponent', () => {
  let component: SupplierTabFiveComponent;
  let fixture: ComponentFixture<SupplierTabFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTabFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTabFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
