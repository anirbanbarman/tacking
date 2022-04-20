import { Component, OnInit } from '@angular/core';
import { TabFiveComponent } from './tab-five/tab-five.component';
import { TabFourComponent } from './tab-four/tab-four.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabThreeComponent } from './tab-three/tab-three.component';
import { TabTwoComponent } from './tab-two/tab-two.component';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  currentComponent:any = TabOneComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabId: any) {
    switch (tabId) {
      case 1:
        this.currentComponent=TabOneComponent;

        break;

      case 2:
        this.currentComponent=TabTwoComponent;

        break;
      case 3:
        this.currentComponent=TabThreeComponent;

        break;
      case 4:
        this.currentComponent=TabFourComponent;

        break;
      case 5:
        this.currentComponent=TabFiveComponent;

        break;

      default:
        break;
    }

  }

}
