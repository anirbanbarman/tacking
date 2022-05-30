import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApisService } from 'src/app/services/apis.service';
import { failMessage,successMessage } from 'src/app/toaster/toaster';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-employee-tab-two',
  templateUrl: './employee-tab-two.component.html',
  styleUrls: ['./employee-tab-two.component.scss']
})
export class EmployeeTabTwoComponent implements OnInit {
  panimage: any = '';
  aadharimage: any = '';
  bankaccountimage: any = '';
  image: any = '';
  quanlificationimage: any = '';

  
  id: any = '';


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
        this.getemployee(data.id);
      } else {        
        }
      });
  }

  getemployee(id:any) {
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
        console.log('employee->', info);
        this.panimage= info.panimage;
        this.aadharimage= info.aadharimage;
        this.bankaccountimage= info.bankaccountimage;
        this.image= info.image;

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

  /*--preview_smartcard(f:any) {
    let files=f.files;
    console.log('fle', files);
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (files) {
      console.log('ok');
      this.spinnerService.show();
      this.api.uploadVehicleFile(files).subscribe((data: any) => {
        console.log('==>>', data);
        this.spinnerService.hide();
        if (data && data.status === 200 && data.data) {
          this.smartcard = data.data;
        }
      }, error => {
        failMessage('Something went wrong');
        this.spinnerService.hide();
      });
    } else {
      console.log('no');
    }
  }--*/

  preview_pan(f:any) {
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
          this.panimage = data.data;
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

  preview_aadhar(f:any) {
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
          this.aadharimage = data.data;
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

  preview_bankaccount(f:any) {
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
          this.bankaccountimage = data.data;
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

  preview_quanlificationimage(f:any) {
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
          this.quanlificationimage = data.data;
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
    payload.append('id', this.id);
    payload.append('image', this.image);
    payload.append('panimage', this.panimage);
    payload.append('aadharimage', this.aadharimage);
    payload.append('bankaccountimage', this.bankaccountimage);
    payload.append('quanlificationimage', this.quanlificationimage);

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
