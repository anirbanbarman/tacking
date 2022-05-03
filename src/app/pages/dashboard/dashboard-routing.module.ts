import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehiclesAllComponent } from './components/vehicles-all/vehicles-all.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerAllComponent } from './components/customer-all/customer-all.component';
import { SupplierAllComponent } from './components/supplier-all/supplier-all.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { BrokerAllComponent } from './components/broker-all/broker-all.component';
import { BrokerComponent } from './components/broker/broker.component';
import { DriverAllComponent } from './components/driver-all/driver-all.component';
import { DriverComponent } from './components/driver/driver.component';
import { ItemAllComponent } from './components/item-all/item-all.component';
import { ItemComponent } from './components/item/item.component';
import { EmployeeAllComponent } from './components/employee-all/employee-all.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { parametersComponent } from './components/parameters/parameters.component';
import { statesComponent } from './components/states/states.component';

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
      },
      {
        path: 'master/broker',
        component: BrokerComponent
      },
      {
        path: 'master/broker-all',
        component: BrokerAllComponent
      },
      {
        path: 'master/driver',
        component: DriverComponent
      },
      {
        path: 'master/driver-all',
        component: DriverAllComponent
      },
      {
        path: 'master/item',
        component: ItemComponent
      },
      {
        path: 'master/item-all',
        component: ItemAllComponent
      },
      {
        path: 'master/employee',
        component: EmployeeComponent
      },
      {
        path: 'master/employee-all',
        component: EmployeeAllComponent
      }
      ,
      {
        path: 'master/employee-all',
        component: EmployeeAllComponent
      }
      ,
      {
        path: 'vehicle-master/parameters',
        component: parametersComponent
      }
      ,
      {
        path: 'vehicle-master/states',
        component: statesComponent
      }
      
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
