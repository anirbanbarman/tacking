import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApisService } from 'src/app/services/apis.service';
import { failMessage,successMessage } from 'src/app/toaster/toaster';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-employee-side-bar',
  templateUrl: './employee-side-bar.component.html',
  styleUrls: ['./employee-side-bar.component.scss']
})
export class EmployeeSideBarComponent implements OnInit {
  image: any = '';  
  id: any = '';
  name: any = '';
  employeeid: any = '';
  department: any = '';
  designation: any = '';
  phonenumber: any = '';
  email: any = '';

  constructor(
    private spinnerService: NgxSpinnerService,
    public api: ApisService,
    public route: ActivatedRoute,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      console.log('id-->',data.id);
      if (data && data.id) {
        this.id = data.id;
        console.log('this.id-->',data.id);
        this.getEmployee(data.id);
      } else {        
        }
      });
  }

  getEmployee(id:any) {
    const param = {
      id: this.id
    };
    this.spinnerService.show();
    console.log('id--', this.id);
    let payload = new FormData();
    payload.append("id",id);
    this.dashboardService.getEmployee(payload).subscribe((response: any) => {      
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        const info = response.data;
        console.log('vehicle yo->', response);
        this.image= info.image;
        this.name=info.name;
        this.department=info.department;
        this.designation=info.designation;
        this.phonenumber=info.phonenumber;
        this.email=info.email;

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

  preview_image(f:any) {
    let files=f.files;
    console.log('fle', files);
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    if (files) {
      console.log('ok');
      this.spinnerService.show();
      this.api.uploadImage(files).subscribe((data: any) => {
        console.log('==>>', data);
        this.spinnerService.hide();
        if (data && data.status === 200 && data.data) {
          this.image = data.data;
          this.update();
        }
      }, err => {
        console.log(err);
        this.spinnerService.hide();
      });
    } else {
      console.log('no');
    }
  }

  update() {
    this.spinnerService.show();
    let payload = new FormData();
    id: this.id;
    image:this.image;
    payload.append('id', this.id);
    payload.append('image', this.image);
    console.log('payload-->',payload)
    this.dashboardService.updateEmployee(payload).subscribe((response: any) => {
      if (response && response?.status === 200) {
        this.spinnerService.hide();
        successMessage("Data Updated Successfully");       
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

}
