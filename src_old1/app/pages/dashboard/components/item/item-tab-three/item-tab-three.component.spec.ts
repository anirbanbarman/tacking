import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabThreeComponent } from './item-tab-three.component';

describe('ItemTabThreeComponent', () => {
  let component: ItemTabThreeComponent;
  let fixture: ComponentFixture<ItemTabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTabThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
