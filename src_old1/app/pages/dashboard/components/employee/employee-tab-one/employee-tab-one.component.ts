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
  selector: 'app-employee-tab-one',
  templateUrl: './employee-tab-one.component.html',
  styleUrls: ['./employee-tab-one.component.scss']
})
export class EmployeeTabOneComponent implements OnInit {

  variables: any = {
    isNew: true,
  }

  overViewForm: any = {
    id:  "",
    status:  1,
    employeeid:  "",
    name:  "",
    department:  "",
    joiningdate:  "",
    designation:  "",
    qualification:  "",
    dateofbirth:  "",
    presentaddress:  "",
    permanentaddress:  "",
    gendar:  "",
    phonenumber:  "",
    email:  "",
    bloodgroup:  "",
    pan:  "",
    aadhar:  "",
    pfnumber:  "",
    esinumber:  "",
    city:  "",
    releasedate:  "",
    releasereason:  "",
    experience:  "",
    uan:  "",
    ctcn:  "",
    maritialstatus:  "",
    bankaccountno:  "",
    bankname:  "",
    ifsc:  "",
    deputedlocation:  "",
    fathername:  "",
    fatherdob:  "",
    mothername:  "",
    motherdob:  "",
    spousename:  "",
    spousedob:  "",
    child1name:  "",
    child1dob:  "",
    child2name:  "",
    child2dob:  "",
    image:  "",
    aadharimage:  "",
    panimage:  "",
    bankaccountimage:  "",
    quanlificationimage:  "",
    
  }

  genderList: any[] = [];
  bloodgroupList: any[] = [];
  qualificationList: any[] = [];
  maritialStatusList: any[] = [];


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
        this.getEmployee(data.id);
        this.getGender();
        this.getBloodgroup();
        this.getQualification();
        this.getMaritialStatus();
      } else {
        this.variables.isNew = true;
        this.getGender();
        this.getBloodgroup();
        this.getQualification();
        this.getMaritialStatus();
      }
      });
    }


    getEmployee(id:any) {
    const param = {
      id: this.overViewForm.id
    };
    this.spinnerService.show();
    console.log('id--', this.overViewForm.id);
    let payload = new FormData();
    payload.append("id",id);
    this.dashboardService.getEmployee(payload).subscribe((response: any) => {      
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        const info = response.data;
        console.log('employee->', info);
        this.overViewForm= info;
        
      }
      else {
        const info = response.data;
        console.log('employee ->', info);
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
    this.dashboardService.saveEmployee(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/dashboard/home//master/employee-all']);
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
    this.dashboardService.updateEmployee(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        successMessage("Data Updated Successfully");
        this.router.navigate(['/dashboard/home//master/employee-all']);
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
      this.dashboardService.updateEmployee(payload).subscribe((response: any)  => {
        this.spinnerService.hide();
        //this.getBrokerList();
        this.router.navigate(['/dashboard/home//master/employee-all']);
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

    getGender() {
      this.spinnerService.show();
      let payload = new FormData();
      payload.append("type","Gender");
      this.dashboardService.getType(payload).subscribe((response: any) => {      
        this.spinnerService.hide();
        if (response && response.status === 200 && response.data) {
          this.genderList = response.data;
         
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

    getBloodgroup() {
      this.spinnerService.show();
      let payload = new FormData();
      payload.append("type","Bloodgroup");
      this.dashboardService.getType(payload).subscribe((response: any) => {      
        this.spinnerService.hide();
        if (response && response.status === 200 && response.data) {
          this.bloodgroupList = response.data;
         
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

    getQualification() {
      this.spinnerService.show();
      let payload = new FormData();
      payload.append("type","Qualification");
      this.dashboardService.getType(payload).subscribe((response: any) => {      
        this.spinnerService.hide();
        if (response && response.status === 200 && response.data) {
          this.qualificationList = response.data;
         
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

    getMaritialStatus() {
      this.spinnerService.show();
      let payload = new FormData();
      payload.append("type","MaritialStatus");
      this.dashboardService.getType(payload).subscribe((response: any) => {      
        this.spinnerService.hide();
        if (response && response.status === 200 && response.data) {
          this.maritialStatusList = response.data;
         
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


  


}
function id(id: any, arg1: any) {
  throw new Error('Function not implemented.');
}

