import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
    selector: 'confirm',
    templateUrl:'./confirm.component.html'
})
export class ConfirmComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  title !: string;
  message !: string;
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
    num_of_types: "",
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



  constructor() {
    super();
  }
  confirm() {
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.result = true;
    this.close();
  }
  cancel() {
    this.result = false;
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
    /*--this.dashboardService.getAllstates().subscribe((response:any)=>{
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
    });--*/
  }
  closeVehicletype() {
    /*--console.log('VehicleType');
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
    this.modalService.dismissAll();--*/
  }
  
  searchVehicletype(str:any) {
    console.log(str);
    this.vehicletype = this.dummyVehicletypeList.filter((ele: any) => {
      return ele.locationcode.toLowerCase().includes(str.toLowerCase());
    });
  }

  
}