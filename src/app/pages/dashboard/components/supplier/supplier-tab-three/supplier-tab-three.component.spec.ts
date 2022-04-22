import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTabThreeComponent } from './supplier-tab-three.component';

describe('SupplierTabThreeComponent', () => {
  let component: SupplierTabThreeComponent;
  let fixture: ComponentFixture<SupplierTabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTabThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
