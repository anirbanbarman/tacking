import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTabSixComponent } from './driver-tab-six.component';

describe('DriverTabSixComponent', () => {
  let component: DriverTabSixComponent;
  let fixture: ComponentFixture<DriverTabSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTabSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTabSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
