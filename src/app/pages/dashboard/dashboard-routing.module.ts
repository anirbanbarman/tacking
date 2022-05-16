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
import { ParametersComponent } from './components/parameters/parameters.component';
import { StatesComponent } from './components/states/states.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { VehicletypeComponent } from './components/vehicletype/vehicletype.component';
import { VehiclemakeComponent } from './components/vehiclemake/vehiclemake.component';
import { VehicleexpensetypeComponent } from './components/vehicleexpensetype/vehicleexpensetype.component';
import { TyretypeComponent } from './components/tyretype/tyretype.component';
import { PolicytypeComponent } from './components/policytype/policytype.component';
import { BatterytypeComponent } from './components/batterytype/batterytype.component';
import { VehiclemodelComponent } from './components/vehiclemodel/vehiclemodel.component';
import { vehicletyperateComponent } from './components/vehicletyperate/vehicletyperate.component';
import { transittypeComponent } from './components/transittype/transittype.component';
import { billchargeComponent } from './components/billcharge/billcharge.component';
import { stationComponent } from './components/station/station.component';
import { vehicleinitialexpensesComponent } from './components/vehicleinitialexpenses/vehicleinitialexpenses.component';
import { vehiclesaleComponent } from './components/vehiclesale/vehiclesale.component';
import { vehiclepermitComponent } from "./components/vehiclepermit/vehiclepermit.component";
import { branchComponent } from './components/branch/branch.component';
import { vehiclebodyComponent } from './components/vehiclebody/vehiclebody.component';
import { vehiclertoseizeComponent } from './components/vehiclertoseize/vehiclertoseize.component';

const routes: Routes = [

  {
    path: 'home',
    component:DashboardComponent,

    children: [
      {
        path: "",
        component:DashboardHomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardHomeComponent,
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
        component: ParametersComponent
      }
      ,
      {
        path: 'vehicle-master/states',
        component: StatesComponent
      }
      ,
      {
        path: 'vehicle-master/vehicletype',
        component: VehicletypeComponent
      }
      ,
      {
        path: 'vehicle-master/vehiclemake',
        component: VehiclemakeComponent
      }
      ,
      {
        path: 'vehicle-master/vehicleexpensetype',
        component: VehicleexpensetypeComponent
      }
      ,
      {
        path: 'vehicle-master/tyretype',
        component: TyretypeComponent
      }
      ,
      {
        path: 'vehicle-master/policytype',
        component: PolicytypeComponent
      }
      ,
      {
        path: 'vehicle-master/batterytype',
        component: BatterytypeComponent
      }
      ,
      {
        path: 'vehicle-master/vehiclemodel',
        component: VehiclemodelComponent
      },
      {
        path: 'vehicle-master/vehicletyperate',
        component: vehicletyperateComponent
      }
      ,
      {
        path: 'vehicle-master/transittype',
        component: transittypeComponent
      }
      ,
      {
        path: 'vehicle-master/billcharge',
        component: billchargeComponent
      }
      ,
      {
        path: 'master/station',
        component: stationComponent
      }
      ,
      {
        path: 'vehicle-master/vehicleinitialexpenses',
        component: vehicleinitialexpensesComponent
      }
      ,
      {
        path: 'vehicle-master/vehiclesale',
        component: vehiclesaleComponent
      }
      ,
      {
        path: 'vehicle-master/vehiclepermit',
        component: vehiclepermitComponent
      },
      {
        path: 'master/branch',
        component: branchComponent
      }
	    ,
	    {
        path: 'vehicle-master/vehiclebody',
        component: vehiclebodyComponent
      }
	    ,
	    {
        path: 'vehicle-master/vehiclertoseize',
        component: vehiclertoseizeComponent
      }

    ]

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
