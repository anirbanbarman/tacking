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
    VehiclesAllComponent


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
