import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabOneComponent } from './item-tab-one.component';

describe('ItemTabOneComponent', () => {
  let component: ItemTabOneComponent;
  let fixture: ComponentFixture<ItemTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
