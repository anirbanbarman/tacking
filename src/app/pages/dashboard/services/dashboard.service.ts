import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAllVehicles() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehicleList));
  }

  updateVehicle(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateVehicle), payload);
  }
  saveVehicle(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveVehicle), payload);
  }
  getVehicle(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getVehicle), id);
  }

  getAllCustomer() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.customerList));
  }

  updateCustomer(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateCustomer), payload);
  }
  saveCustomer(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveCustomer), payload);
  }
  getCustomer(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getCustomer), id);
  }
  getAllSupplier() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.supplierList));
  }

  updateSupplier(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateSupplier), payload);
  }
  saveSupplier(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveSupplier), payload);
  }
  getSupplier(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getSupplier), id);
  }
  getAllBroker() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.brokerList));
  }
  updateBroker(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateBroker), payload);
  }
  saveBroker(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveBroker), payload);
  }
  getBroker(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getBroker), id);
  }
  getAllDriver() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.driverList));
  }
  updateDriver(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateDriver), payload);
  }
  saveDriver(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveDriver), payload);
  }
  getDriver(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getDriver), id);
  }
  getAllItem() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.itemList));
  }
  updateItem(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateItem), payload);
  }
  saveItem(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveItem), payload);
  }
  getItem(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getItem), id);
  }
  getAllEmployee() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.employeeList));
  }
  updateEmployee(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateEmployee), payload);
  }
  saveEmployee(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveEmployee), payload);
  }
  getEmployee(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getEmployee), id);
  }

  getAllparameters() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.parametersList));
  }
  updateparameters(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updateparameters), payload);
  }
  saveparameters(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.saveparameters), payload);
  }
  getparameters(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getparameters), id);
  }

  getAllstates() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.statesList));
  }
  updatestates(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatestates), payload);
  }
  deletestates(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletestates), payload);
  }
  savestates(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savestates), payload);
  }
  getstates(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getstates), id);
  }
  getstatesbycode(code: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getstatesbycode), code);
  }
  getstatesmaxid() {
    return this.http.get(environment.baseUrl + environment.apiUrls.apis.getstatesmaxid);
  }
  getstatesminid() {
    return this.http.get(environment.baseUrl + environment.apiUrls.apis.getstatesminid);
  }

  //vehicle make
  getAllvehiclemake() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehiclemakeList));
    }
    updatevehiclemake(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehiclemake), payload);
    }
    deletevehiclemake(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehiclemake), payload);
    }
    savevehiclemake(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehiclemake), payload);
    }
    getvehiclemake(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclemake), id);
    }
    getvehiclemakebycode(code: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclemakebycode), code);
    }
  
  
    //Vehicle Type
    getAllvehicletype() {
      const param = {
        id: localStorage.getItem('uid'),
        limit: 5000,
      };
      return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehicletypeList));
    }
    updatevehicletype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehicletype), payload);
    }
    deletevehicletype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehicletype), payload);
    }
    savevehicletype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehicletype), payload);
    }
    getvehicletype(id: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicletype), id);
    }
    getvehicletypebycode(code: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicletypebycode), code);
    }
  
    //Policy type
    getAllpolicytype() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.policytypeList));
    }
    updatepolicytype(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatepolicytype), payload);
    }
    deletepolicytype(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletepolicytype), payload);
    }
    savepolicytype(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savepolicytype), payload);
    }
    getpolicytype(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getpolicytype), id);
    }
    getpolicytypebycode(code: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getpolicytypebycode), code);
    }
  
    //Battery Type
    getAllbatterytype() {
  const param = {
    id: localStorage.getItem('uid'),
    limit: 5000,
  };
  return this.http.get((environment.baseUrl + environment.apiUrls.apis.batterytypeList));
  }
  updatebatterytype(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatebatterytype), payload);
  }
  deletebatterytype(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletebatterytype), payload);
  }
  savebatterytype(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.savebatterytype), payload);
  }
  getbatterytype(id: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.getbatterytype), id);
  }
  getbatterytypebycode(code: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.getbatterytypebycode), code);
  }
  
  
  //Tyre Type
  getAlltyretype() {
  const param = {
    id: localStorage.getItem('uid'),
    limit: 5000,
  };
  return this.http.get((environment.baseUrl + environment.apiUrls.apis.tyretypeList));
  }
  updatetyretype(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatetyretype), payload);
  }
  deletetyretype(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletetyretype), payload);
  }
  savetyretype(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.savetyretype), payload);
  }
  gettyretype(id: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.gettyretype), id);
  }
  gettyretypebycode(code: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.gettyretypebycode), code);
  }
  
  //Vehicle expense Type
  getAllvehicleexpensetype() {
      const param = {
        id: localStorage.getItem('uid'),
        limit: 5000,
      };
      return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehicleexpensetypeList));
    }
    updatevehicleexpensetype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehicleexpensetype), payload);
    }
    deletevehicleexpensetype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehicleexpensetype), payload);
    }
    savevehicleexpensetype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehicleexpensetype), payload);
    }
    getvehicleexpensetype(id: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicleexpensetype), id);
    }
    getvehicleexpensetypebycode(code: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicleexpensetypebycode), code);
    }
  
    //Vehicle Model Type
  getAllvehiclemodel() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehiclemodelList));
  }
  updatevehiclemodel(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehiclemodel), payload);
  }
  deletevehiclemodel(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehiclemodel), payload);
  }
  savevehiclemodel(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehiclemodel), payload);
  }
  getvehiclemodel(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclemodel), id);
  }
  getvehiclemodelbycode(code: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclemodelbycode), code);
  }


  getAllvehicletyperate() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehicletyperateList));
  }
  updatevehicletyperate(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehicletyperate), payload);
  }
  deletevehicletyperate(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehicletyperate), payload);
  }
  savevehicletyperate(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehicletyperate), payload);
  }
  getvehicletyperate(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicletyperate), id);
  }
  getvehicletyperatebycode(code: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicletyperatebycode), code);
  }

  //transit Type
  getAlltransittype() {
      const param = {
        id: localStorage.getItem('uid'),
        limit: 5000,
      };
      return this.http.get((environment.baseUrl + environment.apiUrls.apis.transittypeList));
    }
    updatetransittype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatetransittype), payload);
    }
    deletetransittype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletetransittype), payload);
    }
    savetransittype(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.savetransittype), payload);
    }
    gettransittype(id: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.gettransittype), id);
    }
    gettransittypebycode(code: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.gettransittypebycode), code);
    }

    //Bill Charge
    getAllbillcharge() {
      const param = {
        id: localStorage.getItem('uid'),
        limit: 5000,
      };
      return this.http.get((environment.baseUrl + environment.apiUrls.apis.billchargeList));
    }
    updatebillcharge(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatebillcharge), payload);
    }
    deletebillcharge(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletebillcharge), payload);
    }
    savebillcharge(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.savebillcharge), payload);
    }
    getbillcharge(id: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getbillcharge), id);
    }
    getbillchargebycode(code: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getbillchargebycode), code);
    }

    //Station
    getAllstation() {
      const param = {
        id: localStorage.getItem('uid'),
        limit: 5000,
      };
      return this.http.get((environment.baseUrl + environment.apiUrls.apis.stationList));
    }
    updatestation(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatestation), payload);
    }
    deletestation(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletestation), payload);
    }
    savestation(payload: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.savestation), payload);
    }
    getstation(id: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getstation), id);
    }
    getstationbycode(code: any) {
      return this.http.post((environment.baseUrl + environment.apiUrls.apis.getstationbycode), code);
    }

    //Vehicle Initial Expenses
    getAllvehicleinitialexpenses() {
  const param = {
    id: localStorage.getItem('uid'),
    limit: 5000,
  };
  return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehicleinitialexpensesList));
  }
  updatevehicleinitialexpenses(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehicleinitialexpenses), payload);
  }
  deletevehicleinitialexpenses(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehicleinitialexpenses), payload);
  }
  savevehicleinitialexpenses(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehicleinitialexpenses), payload);
  }
  getvehicleinitialexpenses(id: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicleinitialexpenses), id);
  }
  // getvehicleinitialexpensesbycode(code: any) {
  // return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehicleinitialexpensesbycode), code);
  // }

  //Vehicle sale
  getAllvehiclesale() {
  const param = {
    id: localStorage.getItem('uid'),
    limit: 5000,
  };
  return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehiclesaleList));
  }
  updatevehiclesale(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehiclesale), payload);
  }
  deletevehiclesale(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehiclesale), payload);
  }
  savevehiclesale(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehiclesale), payload);
  }
  getvehiclesale(id: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclesale), id);
  }

  //Vehicle Permit
  getAllvehiclepermit() {
  const param = {
    id: localStorage.getItem('uid'),
    limit: 5000,
  };
  return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehiclepermitList));
  }
  updatevehiclepermit(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehiclepermit), payload);
  }
  deletevehiclepermit(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehiclepermit), payload);
  }
  savevehiclepermit(payload: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehiclepermit), payload);
  }
  getvehiclepermit(id: any) {
  return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclepermit), id);
  }



  getAllbranch() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.branchList));
  }
  updatebranch(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatebranch), payload);
  }
  deletebranch(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletebranch), payload);
  }
  savebranch(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savebranch), payload);
  }
  getbranch(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getbranch), id);
  }
  getbranchbycode(code: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getbranchbycode), code);
  }
  
  getAllvehiclebody() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehiclebodyList));
  }
  updatevehiclebody(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehiclebody), payload);
  }
  deletevehiclebody(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehiclebody), payload);
  }
  savevehiclebody(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehiclebody), payload);
  }
  getvehiclebody(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclebody), id);
  }
  getvehiclebodybycode(code: any) {
   return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclebodybycode), code);
  }
 
 getAllvehiclertoseize() {
    const param = {
      id: localStorage.getItem('uid'),
      limit: 5000,
    };
    return this.http.get((environment.baseUrl + environment.apiUrls.apis.vehiclertoseizeList));
  }
  updatevehiclertoseize(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.updatevehiclertoseize), payload);
  }
  deletevehiclertoseize(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.deletevehiclertoseize), payload);
  }
  savevehiclertoseize(payload: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.savevehiclertoseize), payload);
  }
  getvehiclertoseize(id: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclertoseize), id);
  }
  getvehiclertoseizebycode(code: any) {
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getvehiclertoseizebycode), code);
  }



  
  
  getType(type:any) {
    //return this.http.get(environment.baseUrl + environment.apiUrls.apis.getState);
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getType), type);
  }
}
