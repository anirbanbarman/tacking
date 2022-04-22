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
    SupplierAllComponent


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
