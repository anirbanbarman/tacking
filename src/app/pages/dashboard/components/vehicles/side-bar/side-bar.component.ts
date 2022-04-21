import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApisService } from 'src/app/services/apis.service';
import { failMessage,successMessage } from 'src/app/toaster/toaster';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  image: any = '';  
  id: any = '';
  vehicleno: any = '';
  make: any = '';
  model: any = '';
  driver: any = '';

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
        this.getVehicle(data.id);
      } else {        
        }
      });
  }

  getVehicle(id:any) {
    const param = {
      id: this.id
    };
    this.spinnerService.show();
    console.log('id--', this.id);
    let payload = new FormData();
    payload.append("id",id);
    this.dashboardService.getVehicle(payload).subscribe((response: any) => {      
      this.spinnerService.hide();
      if (response && response.status === 200 && response.data) {
        const info = response.data;
        console.log('vehicle yo->', response);
        this.image= info.image;
        this.vehicleno=info.vehicleno;
        this.model=info.model;
        this.make=info.make;
        this.driver=info.driver;

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
      this.api.uploadVehicleFile(files).subscribe((data: any) => {
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
    this.dashboardService.updateVehicle(payload).subscribe((response: any) => {
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
