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
  selector: 'app-item-tab-one',
  templateUrl: './item-tab-one.component.html',
  styleUrls: ['./item-tab-one.component.scss']
})
export class ItemTabOneComponent implements OnInit {

  variables: any = {
    isNew: true,
  }

  overViewForm: any = {
    id: "",
    status: 1,
    code: "",
    description: "",
    rate: "",
    unit: "",
    type: "",
    hsn: "",
    gst: "",
    image: "",
  }



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
        this.getItem(data.id);
      } else {
        this.variables.isNew = true;
      }
      });
    }


    getItem(id:any) {
    const param = {
      id: this.overViewForm.id
    };
    this.spinnerService.show();
    console.log('id--', this.overViewForm.id);
    let payload = new FormData();
    payload.append("id",id);
    this.dashboardService.getItem(payload).subscribe((response: any) => {      
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        const info = response.data;
        console.log('item->', info);
        this.overViewForm= info;
        
      }
      else {
        const info = response.data;
        console.log('item ->', info);
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
    this.dashboardService.saveItem(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/dashboard/home//master/item-all']);
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
    this.dashboardService.updateItem(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        successMessage("Data Updated Successfully");
        this.router.navigate(['/dashboard/home//master/item-all']);
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
      this.dashboardService.updateItem(payload).subscribe((response: any)  => {
        this.spinnerService.hide();
        //this.getBrokerList();
        this.router.navigate(['/dashboard/home//master/item-all']);
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

