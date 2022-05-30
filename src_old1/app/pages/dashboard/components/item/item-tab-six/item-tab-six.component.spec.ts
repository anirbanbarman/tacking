import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabSixComponent } from './item-tab-six.component';

describe('ItemTabSixComponent', () => {
  let component: ItemTabSixComponent;
  let fixture: ComponentFixture<ItemTabSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTabSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTabSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
