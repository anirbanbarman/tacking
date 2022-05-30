import { Component, OnInit } from '@angular/core';
import { BrokerTabSixComponent } from './broker-tab-six/broker-tab-six.component';
import { BrokerTabFiveComponent } from './broker-tab-five/broker-tab-five.component';
import { BrokerTabFourComponent } from './broker-tab-four/broker-tab-four.component';
import { BrokerTabOneComponent } from './broker-tab-one/broker-tab-one.component';
import { BrokerTabThreeComponent } from './broker-tab-three/broker-tab-three.component';
import { BrokerTabTwoComponent } from './broker-tab-two/broker-tab-two.component';


@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {
  currentComponent:any = BrokerTabOneComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabId: any) {
    switch (tabId) {
      case 1:
        this.currentComponent=BrokerTabOneComponent;

        break;

      case 2:
        this.currentComponent=BrokerTabTwoComponent;

        break;
      case 3:
        this.currentComponent=BrokerTabThreeComponent;

        break;
      case 4:
        this.currentComponent=BrokerTabFourComponent;

        break;
      case 5:
        this.currentComponent=BrokerTabFiveComponent;

        break;
      case 6:
          this.currentComponent=BrokerTabSixComponent;
  
          break;

      default:
        break;
    }

  }

}
