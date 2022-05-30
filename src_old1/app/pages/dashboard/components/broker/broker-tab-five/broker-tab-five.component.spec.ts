import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTabFiveComponent } from './broker-tab-five.component';

describe('BrokerTabFiveComponent', () => {
  let component: BrokerTabFiveComponent;
  let fixture: ComponentFixture<BrokerTabFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerTabFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTabFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
