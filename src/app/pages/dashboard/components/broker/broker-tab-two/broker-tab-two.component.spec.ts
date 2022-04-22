import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTabTwoComponent } from './broker-tab-two.component';

describe('BrokerTabTwoComponent', () => {
  let component: BrokerTabTwoComponent;
  let fixture: ComponentFixture<BrokerTabTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerTabTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
