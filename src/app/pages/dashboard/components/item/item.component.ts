import { Component, OnInit } from '@angular/core';
import { ItemTabSixComponent } from './item-tab-six/item-tab-six.component';
import { ItemTabFiveComponent } from './item-tab-five/item-tab-five.component';
import { ItemTabFourComponent } from './item-tab-four/item-tab-four.component';
import { ItemTabOneComponent } from './item-tab-one/item-tab-one.component';
import { ItemTabThreeComponent } from './item-tab-three/item-tab-three.component';
import { ItemTabTwoComponent } from './item-tab-two/item-tab-two.component';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  currentComponent:any = ItemTabOneComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabId: any) {
    switch (tabId) {
      case 1:
        this.currentComponent=ItemTabOneComponent;

        break;

      case 2:
        this.currentComponent=ItemTabTwoComponent;

        break;
      case 3:
        this.currentComponent=ItemTabThreeComponent;

        break;
      case 4:
        this.currentComponent=ItemTabFourComponent;

        break;
      case 5:
        this.currentComponent=ItemTabFiveComponent;

        break;
      case 6:
          this.currentComponent=ItemTabSixComponent;
  
          break;

      default:
        break;
    }

  }

}
