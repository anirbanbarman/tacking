import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabFiveComponent } from './item-tab-five.component';

describe('ItemTabFiveComponent', () => {
  let component: ItemTabFiveComponent;
  let fixture: ComponentFixture<ItemTabFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTabFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTabFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
