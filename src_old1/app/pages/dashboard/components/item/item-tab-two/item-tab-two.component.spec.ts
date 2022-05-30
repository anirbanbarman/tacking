import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabTwoComponent } from './item-tab-two.component';

describe('ItemTabTwoComponent', () => {
  let component: ItemTabTwoComponent;
  let fixture: ComponentFixture<ItemTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTabTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
