import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardService } from './services/main-dashboard.service';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
@NgModule({
  declarations: [MainDashboardComponent],providers:[AuthService,MainDashboardService],

  imports: [
  CommonModule,
    FormsModule,
    MainDashboardRoutingModule,
    NgxSkeletonLoaderModule,
    NgxPaginationModule
  ]
})
export class MainDashboardModule { }
