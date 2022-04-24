import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMainContentComponent } from './item-main-content.component';

describe('ItemMainContentComponent', () => {
  let component: ItemMainContentComponent;
  let fixture: ComponentFixture<ItemMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
