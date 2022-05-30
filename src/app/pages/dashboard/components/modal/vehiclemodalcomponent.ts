import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';
import { ActivatedRoute } from '@angular/router';
import * as xlsx from 'xlsx';
import { ViewChild, ElementRef } from '@angular/core';


export interface VehicleModal {
  title:string;
  message:string;
  data:any;
}
@Component({
    selector: 'vehiclemodal',
    templateUrl:'./vehiclemodal.component.html'
})
export class VehicleModalComponent extends SimpleModalComponent<VehicleModal, any> implements VehicleModal {
  title !: string;
  message !: string;
  data !:any;
  page: number = 1;
  dataList: any[] = [];
  dummyDataList: any[] = [];
  dummy = [];

  vehicle: any = {
    id: "",
    status: 1,
    vehicleno: "",
    make: "",
    model: "",
    engineno: "",
    chasisno: "",
    costPrice: "",
    driver: "",
    financer: "",
    loanAccountNo: "",
    emi: "",
    emiStartDate: "",
    emiEndDate: "",
    emiDuration: "",
    loanAmount: "",
    interestPercentage: "",
    insuranceCompany: "",
    insuranceNumber: "",
    insurancevalidupto: "",
    pollutionvalidity: "",
    taxtokenno: "",
    issuedByRTO: "",
    taxTokenValidity: "",
    permitNo: "",
    permitIssuedByRTO: "",
    permitState: "",
    permitStartDate: "",
    permitEndDate: "",
    permitANo: "",
    permitAIssuedByRTO: "",
    permitAState: "",
    permitAStartDate: "",
    permitAEndDate: "",
    fitnessIssuedBy: "",
    fitnessValidity: "",
    blacklisted: "",
    owner_name: "",
    owner_address: "",
    vehicle_type: "",
    registrationdate: "",
    ac_code: "",
    branch: "",
    length: "0",
    width: "0",
    height: "0",
    bottomtype: "",
    mfg_year: "",
    channel: "",
    axis: "",
    sheetsize: "",
    tank_capacity: "",
    tyre_capacity: "",
    angle_lane: "",
    wheel_base: "",
    danda_tax_applicable: "",
    laden_wt: "",
    gprs_attached: "",
    body_colour: "",
    no_of_battery: "",
    ecu: "",
    controlling_zone: "",
    amc_startdate: "",
    amc_enddate: "",
    group_code: "",
    staff: "",
    body_builder: "",
  }



  vehicleList: any[] = [];
  dummyVehicleList: any[] = [];
  vehicleData: any[] = [];
  vehicleString: any = '';



  constructor(private dashboardService: DashboardService) {
    super();
    this.getVehicle();
  }
  confirm(data:any) {
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.result = data;
    this.close();
  }
  cancel() {

    this.close();
  }
  openVehicletype() {
    console.log(status);
    /*--try {
      this.modalService.open(this.contentVehicleType, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        console.log(result);
      }, (reason) => {
        console.log(reason);
      });
    } catch (error) {
      console.log(error);
    }--*/
  }

  getVehicle()
  {
    this.dashboardService.getAllVehicles().subscribe((response:any)=>{
    console.log(response.data);
    this.dummyVehicleList = [];
    if (response && response.status === 200) {
        this.vehicleList = response.data;
        this.dummyVehicleList = response.data;
      }
    }, error => {
       console.log(error);
       failMessage('Something went wrong');
       this.dummyVehicleList = [];
    });
  }


  closeVehicle() {
   console.log('Vehicle');
    if (this.vehicle.vehicleno) 
    {
      const selectedVehicle= this.vehicleData.filter(x => x.code === this.vehicle.vehicleno);
      console.log('vehicleno', selectedVehicle[0].vehicleno);
      this.vehicle.vehicleno = selectedVehicle[0].vehicleno;
      this.vehicle.make = selectedVehicle[0].make;
      this.vehicle.model = selectedVehicle[0].model;
      this.vehicle.engineno = selectedVehicle[0].engineno;
      this.vehicle.chasisno = selectedVehicle[0].chasisno;
      this.vehicle.driver = selectedVehicle[0].driver;
      this.vehicle.owner_name = selectedVehicle[0].owner_name;
      this.vehicle.blacklisted = selectedVehicle[0].blacklisted;
      this.vehicle.vehicle_type = selectedVehicle[0].vehicle_type;
    }
    
  }

  search(string:any) {
    this.resetChanges();
    console.log('string', string);
    console.log('value', string.target.value);
    this.vehicleList = this.filterItems(string.target.value);
  }

  protected resetChanges = () => {
    this.vehicleList = this.dummyVehicleList;
  }

  filterItems(searchTerm:any) {
    
    return this.vehicleList.filter((item) => {
      console.log('value', item.vehicleno.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()));
      return item.vehicleno.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) > -1;
    });

  }

  selectItem(item:any)
  {
  this.confirm(item);
  }
  
  searchVehicle(str:any) {
    console.log('this.vehicle=>',this.vehicle);
    console.log(str);
    this.vehicle = this.dummyVehicleList.filter((ele: any) => {
      return ele.vehicleno.toLowerCase().includes(str.toLowerCase());
    });
    console.log('this.vehicletype=>',this.vehicle);
  }

  
}