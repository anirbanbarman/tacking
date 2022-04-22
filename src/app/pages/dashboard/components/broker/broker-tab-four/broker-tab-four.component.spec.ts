import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTabFourComponent } from './broker-tab-four.component';

describe('BrokerTabFourComponent', () => {
  let component: BrokerTabFourComponent;
  let fixture: ComponentFixture<BrokerTabFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerTabFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTabFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
