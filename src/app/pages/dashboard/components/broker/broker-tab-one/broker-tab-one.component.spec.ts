import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTabOneComponent } from './broker-tab-one.component';

describe('BrokerTabOneComponent', () => {
  let component: BrokerTabOneComponent;
  let fixture: ComponentFixture<BrokerTabOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerTabOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
