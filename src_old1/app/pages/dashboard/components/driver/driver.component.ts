import { Component, OnInit } from '@angular/core';
import { DriverTabSixComponent } from './driver-tab-six/driver-tab-six.component';
import { DriverTabFiveComponent } from './driver-tab-five/driver-tab-five.component';
import { DriverTabFourComponent } from './driver-tab-four/driver-tab-four.component';
import { DriverTabOneComponent } from './driver-tab-one/driver-tab-one.component';
import { DriverTabThreeComponent } from './driver-tab-three/driver-tab-three.component';
import { DriverTabTwoComponent } from './driver-tab-two/driver-tab-two.component';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  currentComponent:any = DriverTabOneComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabId: any) {
    switch (tabId) {
      case 1:
        this.currentComponent=DriverTabOneComponent;

        break;

      case 2:
        this.currentComponent=DriverTabTwoComponent;

        break;
      case 3:
        this.currentComponent=DriverTabThreeComponent;

        break;
      case 4:
        this.currentComponent=DriverTabFourComponent;

        break;
      case 5:
        this.currentComponent=DriverTabFiveComponent;

        break;
      case 6:
          this.currentComponent=DriverTabSixComponent;
  
          break;

      default:
        break;
    }

  }

}
