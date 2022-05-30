import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTabThreeComponent } from './broker-tab-three.component';

describe('BrokerTabThreeComponent', () => {
  let component: BrokerTabThreeComponent;
  let fixture: ComponentFixture<BrokerTabThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerTabThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
