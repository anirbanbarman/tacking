import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMainContentComponent } from './supplier-main-content.component';

describe('SupplierMainContentComponent', () => {
  let component: SupplierMainContentComponent;
  let fixture: ComponentFixture<SupplierMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
