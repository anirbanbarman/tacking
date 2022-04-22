import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTabSixComponent } from './broker-tab-six.component';

describe('BrokerTabSixComponent', () => {
  let component: BrokerTabSixComponent;
  let fixture: ComponentFixture<BrokerTabSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerTabSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTabSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
