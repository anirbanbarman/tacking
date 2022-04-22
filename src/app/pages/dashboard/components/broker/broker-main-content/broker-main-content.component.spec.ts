import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerMainContentComponent } from './broker-main-content.component';

describe('BrokerMainContentComponent', () => {
  let component: BrokerMainContentComponent;
  let fixture: ComponentFixture<BrokerMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
