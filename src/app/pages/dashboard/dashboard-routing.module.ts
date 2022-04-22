import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehiclesAllComponent } from './components/vehicles-all/vehicles-all.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerAllComponent } from './components/customer-all/customer-all.component';
import { SupplierAllComponent } from './components/supplier-all/supplier-all.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',

    children: [
      { 
        path: "",
        component: DashboardComponent, 
      },
      { 
        path: 'dashboard',
        component: DashboardComponent, 
      },
      {
        path: 'master/vehicles',
        component: VehiclesComponent
      },
      {
        path: 'master/vehicles-all',
        component: VehiclesAllComponent
      },
	    {
        path: 'master/customer',
        component: CustomerComponent
      },
      {
        path: 'master/customer-all',
        component: CustomerAllComponent
      },
      {
        path: 'master/supplier',
        component: SupplierComponent
      },
      {
        path: 'master/supplier-all',
        component: SupplierAllComponent
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
