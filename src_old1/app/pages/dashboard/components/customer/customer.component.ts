import { Component, OnInit } from '@angular/core';
import { CustomerTabSixComponent } from './customer-tab-six/customer-tab-six.component';
import { CustomerTabFiveComponent } from './customer-tab-five/customer-tab-five.component';
import { CustomerTabFourComponent } from './customer-tab-four/customer-tab-four.component';
import { CustomerTabOneComponent } from './customer-tab-one/customer-tab-one.component';
import { CustomerTabThreeComponent } from './customer-tab-three/customer-tab-three.component';
import { CustomerTabTwoComponent } from './customer-tab-two/customer-tab-two.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  currentComponent:any = CustomerTabOneComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabId: any) {
    switch (tabId) {
      case 1:
        this.currentComponent=CustomerTabOneComponent;

        break;

      case 2:
        this.currentComponent=CustomerTabTwoComponent;

        break;
      case 3:
        this.currentComponent=CustomerTabThreeComponent;

        break;
      case 4:
        this.currentComponent=CustomerTabFourComponent;

        break;
      case 5:
        this.currentComponent=CustomerTabFiveComponent;

        break;
      case 6:
          this.currentComponent=CustomerTabSixComponent;
  
          break;

      default:
        break;
    }

  }

}
