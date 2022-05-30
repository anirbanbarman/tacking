import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApisService } from 'src/app/services/apis.service';
import { failMessage,successMessage } from 'src/app/toaster/toaster';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss']
})
export class TabTwoComponent implements OnInit {
  smartcardimage: any = '';
  pollutionimage: any = '';
  insuranceimage: any = '';
  taximage: any = '';
  permitimage: any = '';
  fitnessimage: any = '';
  invoiceimage: any = '';
  permitpartAimage: any = '';
  image: any = '';

  
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
        console.log('vehicle yo->', info);
        this.smartcardimage= info.smartcardimage;
        this.pollutionimage= info.pollutionimage;
        this.insuranceimage= info.insuranceimage;
        this.taximage= info.taximage;
        this.permitimage= info.permitimage;
        this.fitnessimage= info.fitnessimage;
        this.invoiceimage= info.invoiceimage;
        this.permitpartAimage= info.permitpartAimage;
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
      this.api.uploadImage(files).subscribe((data: any) => {
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


  preview_smartcard(f:any) {
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
          this.smartcardimage = data.data;
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

  preview_pollution(f:any) {
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
          this.pollutionimage = data.data;
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

  preview_insurance(f:any) {
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
          this.insuranceimage = data.data;
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

  preview_tax(f:any) {
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
          this.taximage = data.data;
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

  preview_permit(f:any) {
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
          this.permitimage = data.data;
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

  preview_fitness(f:any) {
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
          this.fitnessimage = data.data;
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

  preview_invoice(f:any) {
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
          this.invoiceimage = data.data;
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

  preview_permitA(f:any) {
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
          this.permitpartAimage = data.data;
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
    smartcardimage:this.smartcardimage;
    payload.append('id', this.id);
    payload.append('smartcardimage', this.smartcardimage);
    payload.append('pollutionimage', this.pollutionimage);
    payload.append('insuranceimage', this.insuranceimage);
    payload.append('taximage', this.taximage);
    payload.append('permitimage', this.permitimage);
    payload.append('fitnessimage', this.fitnessimage);
    payload.append('invoiceimage', this.invoiceimage);
    payload.append('permitpartAimage', this.permitpartAimage);
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
