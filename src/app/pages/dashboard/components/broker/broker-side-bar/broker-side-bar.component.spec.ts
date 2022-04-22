import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerSideBarComponent } from './broker-side-bar.component';

describe('BrokerSideBarComponent', () => {
  let component: BrokerSideBarComponent;
  let fixture: ComponentFixture<BrokerSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
