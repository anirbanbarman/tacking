import { Component, OnInit } from '@angular/core';
import { SupplierTabFiveComponent } from './supplier-tab-five/supplier-tab-five.component';
import { SupplierTabFourComponent } from './supplier-tab-four/supplier-tab-four.component';
import { SupplierTabOneComponent } from './supplier-tab-one/supplier-tab-one.component';
import { SupplierTabThreeComponent } from './supplier-tab-three/supplier-tab-three.component';
import { SupplierTabTwoComponent } from './supplier-tab-two/supplier-tab-two.component';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  currentComponent:any = SupplierTabOneComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabId: any) {
    switch (tabId) {
      case 1:
        this.currentComponent=SupplierTabOneComponent;

        break;

      case 2:
        this.currentComponent=SupplierTabTwoComponent;

        break;
      case 3:
        this.currentComponent=SupplierTabThreeComponent;

        break;
      case 4:
        this.currentComponent=SupplierTabFourComponent;

        break;
      case 5:
        this.currentComponent=SupplierTabFiveComponent;

        break;

      default:
        break;
    }

  }

}
