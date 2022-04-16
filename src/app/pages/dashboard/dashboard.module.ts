import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowDropdownDirective } from 'src/app/directives/show-dropdown.directive';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    ShowDropdownDirective,
    ClickOutsideDirective,
    NavbarComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
