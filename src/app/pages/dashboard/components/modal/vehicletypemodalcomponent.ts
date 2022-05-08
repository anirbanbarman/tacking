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


export interface VehicletypeModal {
  title:string;
  message:string;
  data:any;
}
@Component({
    selector: 'vehicletypemodal',
    templateUrl:'./vehicletypemodal.component.html'
})
export class VehicletypeModalComponent extends SimpleModalComponent<VehicletypeModal, any> implements VehicletypeModal {
  title !: string;
  message !: string;
  data !:any;
  page: number = 1;
  dataList: any[] = [];
  dummyDataList: any[] = [];
  dummy = [];

  overViewForm: any = {
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
  }

  vehicletype:any={
    code: "",
    model: "",
    detentionchargeperday: "",
    num_of_tyres: "",
    bharat_stage: "",
    tyre_cost_per_km: "",
    repairing_cost_per_km: "",
    earning_per_day: "",
    loading_capacity: "",
  }

  vehicletypeList: any[] = [];
  dummyVehicletypeList: any[] = [];
  vehicletypeData: any[] = [];
  vehicletypeString: any = '';



  constructor(private dashboardService: DashboardService) {
    super();
    this.getVehicletype();
  }
  confirm() {
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.result = "hello from modal component";
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

  getVehicletype()
  {
    this.dashboardService.getAllvehicletype().subscribe((response:any)=>{
    console.log(response.data);
    this.dummyVehicletypeList = [];
    if (response && response.status === 200) {
        this.vehicletypeList = response.data;
        this.dummyVehicletypeList = response.data;
      }
    }, error => {
       console.log(error);
       failMessage('Something went wrong');
       this.dummyVehicletypeList = [];
    });
  }
  closeVehicletype() {
   console.log('VehicleType');
    if (this.vehicletype.code) 
    {
      const selectedVehicleType = this.vehicletypeData.filter(x => x.code === this.vehicletype.code);
      console.log('name', selectedVehicleType[0].locationcode);
      this.vehicletype.model = selectedVehicleType[0].model;
      this.vehicletype.detentionchargeperday = selectedVehicleType[0].detentionchargeperday;
      this.vehicletype.num_of_types = selectedVehicleType[0].num_of_types;
      this.vehicletype.bharat_stage = selectedVehicleType[0].bharat_stage;
      this.vehicletype.tyre_cost_per_km = selectedVehicleType[0].tyre_cost_per_km;
      this.vehicletype.repairing_cost_per_km = selectedVehicleType[0].repairing_cost_per_km;
      this.vehicletype.earning_per_day = selectedVehicleType[0].earning_per_day;
      this.vehicletype.loading_capacity = selectedVehicleType[0].loading_capacity;
    }
    
  }

  search(string:any) {
    this.resetChanges();
    console.log('string', string);
    this.vehicletypeList = this.filterItems(string);
  }

  protected resetChanges = () => {
    this.vehicletypeList = this.dummyVehicletypeList;
  }

  filterItems(searchTerm:any) {
    return this.vehicletypeList.filter((item) => {
      return item.model.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) > -1;
    });

  }

  selectItem(item:any)
  {
  this.confirm();
  }
  
  searchVehicletype(str:any) {
    console.log(str);
    this.vehicletype = this.dummyVehicletypeList.filter((ele: any) => {
      return ele.model.toString().toLowerCase().includes(str.toString().toLowerCase());
    });
  }

  
}