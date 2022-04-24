import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabFourComponent } from './item-tab-four.component';

describe('ItemTabFourComponent', () => {
  let component: ItemTabFourComponent;
  let fixture: ComponentFixture<ItemTabFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTabFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTabFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
