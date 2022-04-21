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
}
