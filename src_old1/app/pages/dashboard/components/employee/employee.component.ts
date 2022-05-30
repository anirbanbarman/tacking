import { Component, OnInit } from '@angular/core';
import { EmployeeTabOneComponent } from './employee-tab-one/employee-tab-one.component';
import { EmployeeTabTwoComponent } from './employee-tab-two/employee-tab-two.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  currentComponent:any = EmployeeTabOneComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabId: any) {
    switch (tabId) {
      case 1:
        this.currentComponent=EmployeeTabOneComponent;

        break;

      case 2:
        this.currentComponent=EmployeeTabTwoComponent;

        break;
      default:
        break;
    }

  }

}
