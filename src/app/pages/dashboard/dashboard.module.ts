import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowDropdownDirective } from 'src/app/directives/show-dropdown.directive';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderSecondaryComponent } from './components/header-secondary/header-secondary.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/vehicles/side-bar/side-bar.component';
import { MainContentComponent } from './components/vehicles/main-content/main-content.component';
import { TabOneComponent } from './components/vehicles/tab-one/tab-one.component';
import { TabTwoComponent } from './components/vehicles/tab-two/tab-two.component';
import { TabThreeComponent } from './components/vehicles/tab-three/tab-three.component';
import { TabFourComponent } from './components/vehicles/tab-four/tab-four.component';
import { TabFiveComponent } from './components/vehicles/tab-five/tab-five.component';
import { VehiclesAllComponent } from './components/vehicles-all/vehicles-all.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerSideBarComponent } from './components/customer/customer-side-bar/customer-side-bar.component';
import { CustomerMainContentComponent } from './components/customer/customer-main-content/customer-main-content.component';
import { CustomerTabOneComponent } from './components/customer/customer-tab-one/customer-tab-one.component';
import { CustomerTabTwoComponent } from './components/customer/customer-tab-two/customer-tab-two.component';
import { CustomerTabThreeComponent } from './components/customer/customer-tab-three/customer-tab-three.component';
import { CustomerTabFourComponent } from './components/customer/customer-tab-four/customer-tab-four.component';
import { CustomerTabFiveComponent } from './components/customer/customer-tab-five/customer-tab-five.component';
import { CustomerAllComponent } from './components/customer-all/customer-all.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierSideBarComponent } from './components/supplier/supplier-side-bar/supplier-side-bar.component';
import { SupplierMainContentComponent } from './components/supplier/supplier-main-content/supplier-main-content.component';
import { SupplierTabOneComponent } from './components/supplier/supplier-tab-one/supplier-tab-one.component';
import { SupplierTabTwoComponent } from './components/supplier/supplier-tab-two/supplier-tab-two.component';
import { SupplierTabThreeComponent } from './components/supplier/supplier-tab-three/supplier-tab-three.component';
import { SupplierTabFourComponent } from './components/supplier/supplier-tab-four/supplier-tab-four.component';
import { SupplierTabFiveComponent } from './components/supplier/supplier-tab-five/supplier-tab-five.component';
import { SupplierAllComponent } from './components/supplier-all/supplier-all.component';
import { BrokerComponent } from './components/broker/broker.component';
import { BrokerSideBarComponent } from './components/broker/broker-side-bar/broker-side-bar.component';
import { BrokerMainContentComponent } from './components/broker/broker-main-content/broker-main-content.component';
import { BrokerTabOneComponent } from './components/broker/broker-tab-one/broker-tab-one.component';
import { BrokerTabTwoComponent } from './components/broker/broker-tab-two/broker-tab-two.component';
import { BrokerTabThreeComponent } from './components/broker/broker-tab-three/broker-tab-three.component';
import { BrokerTabFourComponent } from './components/broker/broker-tab-four/broker-tab-four.component';
import { BrokerTabFiveComponent } from './components/broker/broker-tab-five/broker-tab-five.component';
import { BrokerAllComponent } from './components/broker-all/broker-all.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriverSideBarComponent } from './components/driver/driver-side-bar/driver-side-bar.component';
import { DriverMainContentComponent } from './components/driver/driver-main-content/driver-main-content.component';
import { DriverTabOneComponent } from './components/driver/driver-tab-one/driver-tab-one.component';
import { DriverTabTwoComponent } from './components/driver/driver-tab-two/driver-tab-two.component';
import { DriverTabThreeComponent } from './components/driver/driver-tab-three/driver-tab-three.component';
import { DriverTabFourComponent } from './components/driver/driver-tab-four/driver-tab-four.component';
import { DriverTabFiveComponent } from './components/driver/driver-tab-five/driver-tab-five.component';
import { DriverAllComponent } from './components/driver-all/driver-all.component';
import { ItemComponent } from './components/item/item.component';
import { ItemSideBarComponent } from './components/item/item-side-bar/item-side-bar.component';
import { ItemMainContentComponent } from './components/item/item-main-content/item-main-content.component';
import { ItemTabOneComponent } from './components/item/item-tab-one/item-tab-one.component';
import { ItemTabTwoComponent } from './components/item/item-tab-two/item-tab-two.component';
import { ItemTabThreeComponent } from './components/item/item-tab-three/item-tab-three.component';
import { ItemTabFourComponent } from './components/item/item-tab-four/item-tab-four.component';
import { ItemTabFiveComponent } from './components/item/item-tab-five/item-tab-five.component';
import { ItemAllComponent } from './components/item-all/item-all.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeSideBarComponent } from './components/employee/employee-side-bar/employee-side-bar.component';
import { EmployeeMainContentComponent } from './components/employee/employee-main-content/employee-main-content.component';
import { EmployeeTabOneComponent } from './components/employee/employee-tab-one/employee-tab-one.component';
import { EmployeeTabTwoComponent } from './components/employee/employee-tab-two/employee-tab-two.component';
import { EmployeeAllComponent } from './components/employee-all/employee-all.component';
import { parametersComponent } from './components/parameters/parameters.component';
import { statesComponent } from './components/states/states.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from './services/dashboard.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination'; 



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    ShowDropdownDirective,
    ClickOutsideDirective,
    NavbarComponent,
    HeaderSecondaryComponent,
    VehiclesComponent,
    FooterComponent,
    SideBarComponent,
    MainContentComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabFourComponent,
    TabFiveComponent,
    VehiclesAllComponent,
    CustomerComponent,
    CustomerSideBarComponent,
    CustomerMainContentComponent,
    CustomerTabOneComponent,
    CustomerTabTwoComponent,
    CustomerTabThreeComponent,
    CustomerTabFourComponent,
    CustomerTabFiveComponent,
    CustomerAllComponent,
    SupplierComponent,
    SupplierSideBarComponent,
    SupplierMainContentComponent,
    SupplierTabOneComponent,
    SupplierTabTwoComponent,
    SupplierTabThreeComponent,
    SupplierTabFourComponent,
    SupplierTabFiveComponent,
    SupplierAllComponent,
    BrokerComponent,
    BrokerSideBarComponent,
    BrokerMainContentComponent,
    BrokerTabOneComponent,
    BrokerTabTwoComponent,
    BrokerTabThreeComponent,
    BrokerTabFourComponent,
    BrokerTabFiveComponent,
    BrokerAllComponent,
    DriverComponent,
    DriverSideBarComponent,
    DriverMainContentComponent,
    DriverTabOneComponent,
    DriverTabTwoComponent,
    DriverTabThreeComponent,
    DriverTabFourComponent,
    DriverTabFiveComponent,
    DriverAllComponent,
    ItemComponent,
    ItemSideBarComponent,
    ItemMainContentComponent,
    ItemTabOneComponent,
    ItemTabTwoComponent,
    ItemTabThreeComponent,
    ItemTabFourComponent,
    ItemTabFiveComponent,
    ItemAllComponent,
    EmployeeComponent,
    EmployeeSideBarComponent,
    EmployeeMainContentComponent,
    EmployeeTabOneComponent,
    EmployeeTabTwoComponent,
    EmployeeAllComponent,
    parametersComponent,
    statesComponent


  ],providers:[AuthService,DashboardService],

  imports: [
  CommonModule,
    FormsModule,
    DashboardRoutingModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
