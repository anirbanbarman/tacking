import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { failMessage, successMessage } from 'src/app/toaster/toaster';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from 'src/app/services/loader.service';
import { DashboardService } from '../../../services/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-driver-tab-one',
  templateUrl: './driver-tab-one.component.html',
  styleUrls: ['./driver-tab-one.component.scss']
})
export class DriverTabOneComponent implements OnInit {

  variables: any = {
    isNew: true,
  }

  overViewForm: any = {
    id: "",
    status: 1,
    name: "",
    address: "",
    licenseno: "",
    rto: "",
    contactnumber: "",
    aadhar: "",
    pan: "",
    licsenseexpirydate: "",
    bankaccountno: "",
    ifsc: "",
    bankname: "",
    vehicle: "",
    fathername: "",
    pic: "",
    aadharpic: "",
    panpic: "",
    licensepic: "",
    bankdetailspic: "",

  }

  vehiclelist: any[] = [];
  dummyVehiclelist: any[] = [];



  constructor(
    private spinnerService: NgxSpinnerService,
    private dashboardService: DashboardService,
    public route: ActivatedRoute,
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
        this.getDriver(data.id);
        this.getVehicleList();
      } else {
        this.variables.isNew = true;
        this.getVehicleList();
      }
      });
    }


    getDriver(id:any) {
    const param = {
      id: this.overViewForm.id
    };
    this.spinnerService.show();
    console.log('id--', this.overViewForm.id);
    let payload = new FormData();
    payload.append("id",id);
    this.dashboardService.getDriver(payload).subscribe((response: any) => {      
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        const info = response.data;
        console.log('driver->', info);
        this.overViewForm= info;
        
      }
      else {
        const info = response.data;
        console.log('driver ->', info);
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
    this.dashboardService.saveDriver(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        localStorage.setItem('token', response.data.token);
        this.vehicleupdate();
        this.router.navigate(['/dashboard/home//master/driver-all']);
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
    this.dashboardService.updateDriver(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        successMessage("Data Updated Successfully");
        this.vehicleupdate();
        this.router.navigate(['/dashboard/home//master/driver-all']);
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


  getVehicleList() {
    this.dashboardService.getAllVehicles().subscribe((response:any)=>{
      console.log(response.data);
      if (response && response.status === 200) {
      this.vehiclelist = response.data;
      this.dummyVehiclelist = response.data;
      }
      }, error => {
      console.log(error);
      failMessage('No Vehicle Found');
      });
  }

  vehicleupdate() {
    this.spinnerService.show();
    let payload = new FormData();
    id: this.overViewForm.id;
    payload.append('driver', this.overViewForm.id);
    payload.append('id', this.overViewForm.vehicle);
    this.dashboardService.updateVehicle(payload).subscribe((response: any) => {
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
      this.dashboardService.updateDriver(payload).subscribe((response: any)  => {
        this.spinnerService.hide();
        //this.getBrokerList();
        this.router.navigate(['/dashboard/home//master/driver-all']);
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


}
function id(id: any, arg1: any) {
  throw new Error('Function not implemented.');
}

