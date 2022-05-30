import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { failMessage, successMessage } from 'src/app/toaster/toaster';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from 'src/app/services/loader.service';
import { DashboardService } from '../../../services/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SimpleModalComponent, SimpleModalService } from "ngx-simple-modal";
import { VehicletypeModalComponent } from '../../modal/vehicletypemodalcomponent';


@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.scss']
})
export class TabOneComponent implements OnInit {

  @ViewChild('contentVehicleType', { static: false }) contentVehicleType: any;


  showConfirm() {
    let disposable = this.simpleModalService.addModal(VehicletypeModalComponent, {
          title: '',
          message: 'Confirm message',
          data: 'data from tab one'
        })
        .subscribe((result)=>{
            //We get modal result
            //alert(JSON.stringify(result))
            this.overViewForm.vehicle_type=result.code;
            this.vehicletype=result;
           
        });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    // setTimeout(()=>{
    //     disposable.unsubscribe();
    // },10000);
}

  variables: any = {
    isNew: true,
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


  
  driverList: any[] = [];
  dummyDriverList: any[] = [];


  employeeList: any[] = [];
  dummyEmployeeList: any[] = [];

  branchList: any[] = [];
  dummyBranchList: any[] = [];

  statesList: any[] = [];
  dummyStatesList: any[] = [];

  yesnoList: any[] = [];

  vehicletypeList: any[] = [];
  dummyVehicletypeList: any[] = [];
  vehicletypeData: any[] = [];
  vehicletypeString: any = '';

  volume: any = 0;

  constructor(
    private spinnerService: NgxSpinnerService,
    private dashboardService: DashboardService,
    public route: ActivatedRoute,
    private modalService: NgbModal,
    private simpleModalService:SimpleModalService,
    private router: Router) {

  }
  ngOnInit()
     {
      this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data && data.id) {
        this.overViewForm.id = data.id;
        this.variables.isNew = false;
        console.log(this.variables.isNew);
        this.getVehicle(data.id);
        this.getDriverList();
        this.getEmployeeList();
        this.getStates();
        this.getYesNo();
      } else {
        this.variables.isNew = true;
        this.getDriverList();
        this.getEmployeeList();
        this.getStates();
        this.getYesNo();
      }
      });
    }


  getVehicle(id:any) {
    const param = {
      id: this.overViewForm.id
    };
    this.spinnerService.show();
    console.log('id--', this.overViewForm.id);
    let payload = new FormData();
    payload.append("id",id);
    this.dashboardService.getVehicle(payload).subscribe((response: any) => {      
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        const info = response.data;
        console.log('vehicle ->', info);
        this.overViewForm= info;      
        this.getVehicletypeData(this.overViewForm.vehicle_type);
        
      }
      else {
        const info = response.data;
        console.log('services ->', info);
      }
    }, error => {
      this.spinnerService.hide();
      failMessage('Something went wrong');
      console.log(error);
    });
  }


  getVehicletypeData(code:any) {
    const param = {
      code: this.overViewForm.vehicle_type
    };
    this.spinnerService.show();
    console.log('code--', this.overViewForm.vehicle_type);
    let payload = new FormData();
    payload.append("code",code);
    this.dashboardService.getvehicletypebycode(payload).subscribe((response: any) => {
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        const info = response.data;
        console.log('vehicletype->', info);
        this.vehicletype= info;
        this.variables.isNew=false;
      }
      else {
        const info = response.data;
        console.log('vehicletype ->', info);
      }
    }, error => {
      this.spinnerService.hide();
      failMessage('Something went wrong');
      console.log(error);
    });
  }

  save() {
    this.spinnerService.show();
    let payload = new FormData();
    for (var key in this.overViewForm) {
      payload.append(key, this.overViewForm[key]);
    }
    this.dashboardService.saveVehicle(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        localStorage.setItem('token', response.data.token);
        this.DriverUpdate();
        this.router.navigate(['/dashboard/home//master/vehicles-all']);
      }
      else {
        failMessage(response?.data?.message)
        this.spinnerService.hide();
      }
    },
      error => {
        this.spinnerService.hide();
      });
  }

  update() {
    this.spinnerService.show();
    let payload = new FormData();
    id: this.overViewForm.id;
    payload.append('id', this.overViewForm.id);
    for (var key in this.overViewForm) {
      payload.append(key, this.overViewForm[key]);
    }
    this.dashboardService.updateVehicle(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        successMessage("Data Updated Successfully");
        this.DriverUpdate();
        this.router.navigate(['/dashboard/home//master/vehicles-all']);
      }
      else {
        failMessage(response?.data?.message)
        this.spinnerService.hide();
      }
    },
      error => {
        this.spinnerService.hide();
      });
  }

  submit() {
    console.log(this.variables.isNew);
    /*--let payload = new FormData();
    for (var key in this.overViewForm) {
      payload.append(key, this.overViewForm[key]);
    }
    console.log(this.overViewForm.vehicleNo);
    if (!this.overViewForm.vehicleNo || this.overViewForm.vehicleNo === '') {
      failMessage("Please enter vehicle no");
      return false;
    }--*/
    if (this.variables.isNew==true) {
      console.log('new');
      this.save();
      return true;
    }
    else {
      console.log('update');
      this.update();
      return true;
    }
  }


  getDriverList() {
    this.dashboardService.getAllDriver().subscribe((response:any)=>{
      console.log(response.data);
      if (response && response.status === 200) {
      this.driverList = response.data;
      this.dummyDriverList = response.data;
      }
      }, error => {
      console.log(error);
      failMessage('No Driver Found');
      });
  }


  
  getEmployeeList() {
    this.dashboardService.getAllEmployee().subscribe((response:any)=>{
      console.log(response.data);
      if (response && response.status === 200) {
      this.employeeList = response.data;
      this.dummyEmployeeList = response.data;
      }
      }, error => {
      console.log(error);
      failMessage('No Driver Found');
      });
  }


  

  DriverUpdate() {
    this.spinnerService.show();
    let payload = new FormData();
    id: this.overViewForm.id;
    payload.append('id', this.overViewForm.driver);
    payload.append('vehicle', this.overViewForm.id);
    this.dashboardService.updateDriver(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        successMessage("Data Updated Successfully");
        this.router.navigate(['/dashboard/home//master/vehicles-all']);
      }
      else {
        failMessage(response?.data?.message)
        this.spinnerService.hide();
      }
    },
      error => {
        this.spinnerService.hide();
      });
  }



  getStates() {
    this.spinnerService.show();
    let payload = new FormData();
    payload.append("type","States");
    this.dashboardService.getType(payload).subscribe((response: any) => {      
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        this.statesList = response.data;
       this.dummyStatesList = response.data;
        
      }
      else {
        const info = response.data;
        console.log('services ->', info);
      }
    }, error => {
      this.spinnerService.hide();
      failMessage('Something went wrong');
      console.log(error);
    });
  }

  changeStatus()
  {    
    Swal.fire({
      title: 'Are you sure?',
      text: 'To change it',
      icon: 'question',
      showConfirmButton: true,
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      backdrop: false,
      background: 'white'
    }).then((data) => {
      if (data && data.value) {
      console.log('update it');
      let payload = new FormData();
      payload.append('id', this.overViewForm.id);
      if(this.overViewForm.status==0)
      {
        payload.append('status', '1');
      }
      else
      {
        payload.append('status', '0');
      }
      this.spinnerService.show();
      this.dashboardService.updateVehicle(payload).subscribe((response: any)  => {
        this.spinnerService.hide();
        //this.getBrokerList();
        this.router.navigate(['/dashboard/home//master/vehicles-all']);
      }, error => {
        this.spinnerService.hide();
        failMessage('Something went wrong');
        console.log(error);
      });
    }
  });
  }

  getClass(item:any) {
    if (item === '1') {
    return 'btn btn-success btn-block';
    } else if (item === '0') {
    return 'btn btn-danger btn-block';
    }
    return 'btn btn-warning btn-block';
    }


    getYesNo() {
      this.spinnerService.show();
      let payload = new FormData();
      payload.append("type","YesNo");
      this.dashboardService.getType(payload).subscribe((response: any) => {      
        this.spinnerService.hide();
        if (response && response.status === 200 && response.data) {
          this.yesnoList = response.data;
         
        }
        else {
          const info = response.data;
          console.log('services ->', info);
        }
      }, error => {
        this.spinnerService.hide();
        failMessage('Something went wrong');
        console.log(error);
      });
    }


    openVehicletype() {
      console.log(status);
      try {
        this.modalService.open(this.contentVehicleType, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          console.log(result);
        }, (reason) => {
          console.log(reason);
        });
      } catch (error) {
        console.log(error);
      }
    }
    
    /*--getVehicletype() {
      this.api.get('site').then((sites: any) => {
        console.log(sites);
        if (sites && sites.status === 200 && sites.data && sites.data.length) {
          console.log(sites.data);
          this.site = sites.data;
          this.dummyVehicletype = sites.data;
        } else {
          this.error(this.util.getString('No Vehicletype found'));
        }
      }, error => {
        this.error(this.util.getString('Something went wrong'));
        console.log(error);
      });
    }--*/

    getVehicletype()
    {
      this.dashboardService.getAllstates().subscribe((response:any)=>{
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
      this.modalService.dismissAll();
    }
    
    searchVehicletype(str:any) {
      console.log('this.vehicletype=>',this.vehicletype);
      console.log(str);
      this.vehicletype = this.dummyVehicletypeList.filter((ele: any) => {
        return ele.locationcode.toLowerCase().includes(str.toLowerCase());
      });
      console.log('this.vehicletype=>',this.vehicletype);
    }

    calculatevolume()
    {
      this.volume=(parseFloat(this.overViewForm.height)*parseFloat(this.overViewForm.width)*parseFloat(this.overViewForm.height)).toFixed(2);  
    }


}
function id(id: any, arg1: any) {
  throw new Error('Function not implemented.');
}

