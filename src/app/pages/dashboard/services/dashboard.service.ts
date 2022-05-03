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
  
  getType(type:any) {
    //return this.http.get(environment.baseUrl + environment.apiUrls.apis.getState);
    return this.http.post((environment.baseUrl + environment.apiUrls.apis.getType), type);
  }
}
