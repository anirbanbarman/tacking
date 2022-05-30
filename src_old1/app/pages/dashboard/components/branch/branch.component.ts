import { Component, OnInit } from '@angular/core';
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


@Component({
selector: 'app-branch',
templateUrl: './branch.component.html',
styleUrls: ['./branch.component.scss']
})
export class branchComponent implements OnInit {
  
  
    variables: any = {
        isNew: true,
        checkcode: true
      }

    branchList: any[] = [];
    dummybranchList: any[] = [];
    dataList: any[] = [];
    dummyDataList: any[] = [];
    page: number = 1;
    dummy = [];
    


    zonesList: any[] = [];
    dummyZonesList: any[] = [];

    overViewForm: any = {
        id:  "",
        code:  "",
        type:  "",
        zone:  "",
        manager:  "",
        mobileno:  "",
        registration_branch:  "",
		email:  "",
		department:  "",
		cash_limit:  "",
		opening_bank_limit:  "",
		closing_bank_limit:  "",
		esi_deduct:  "",
		salary_quit:  "",
		sorting:  "",
		show_online:  "",
		valid_ac_code:  "",
		bank_ifsc:  "",
		bank_account_no:  "",
		gst_number:  "",
      }

    constructor(
        private dashboardService: DashboardService,
        private router: Router,
        public route: ActivatedRoute,
        private spinner: NgxSpinnerService,
        public api: ApisService, 
    ) 
    { 
      this.getbranch();
      this.getZones();
      this.getDataList();
    }


  getDataList()
  {
    this.dashboardService.getAllbranch().subscribe((response:any)=>{
    console.log(response.data);
    this.dummy = [];
    if (response && response.status === 200) {
        this.dataList = response.data;
        this.dummyDataList = response.data;
      }
    }, error => {
       console.log(error);
       failMessage('Something went wrong');
       this.dummy = [];
    });
  }

    save() {
        this.spinner.show();
        if(this.variables.checkCode==false)
        {
          console.log('save');
          let payload = new FormData();
          id: "";
          for (var key in this.overViewForm) {
            payload.append(key, this.overViewForm[key]);
          }
          this.dashboardService.savebranch(payload).subscribe((response: any) => {
            if (response && response?.status === 200) {
              this.spinner.hide(); 
              this.getDataList();    
                   
            }
            else {
              failMessage(response?.data?.message)
              this.spinner.hide();
            }
          12},
          error => {
            this.spinner.hide();
          });
        }
      }

      update() {
        this.spinner.show();
        console.log('update');
        let payload = new FormData();
        id: this.overViewForm.id;
        for (var key in this.overViewForm) {
          payload.append(key, this.overViewForm[key]);
        }
        this.dashboardService.updatebranch(payload).subscribe((response: any) => {
          if (response && response?.status === 200) {
            this.spinner.hide();  
            this.getDataList();
                   
          }
          else {
            failMessage(response?.data?.message)
            this.spinner.hide();
          }
        },
          error => {
            this.spinner.hide();
          });
      }

      delete() {
        this.spinner.show();
        console.log('update');
        let payload = new FormData();
        id: this.overViewForm.id;
        for (var key in this.overViewForm) {
          payload.append(key, this.overViewForm[key]);
        }
        this.dashboardService.deletebranch(payload).subscribe((response: any) => {
          if (response && response?.status === 200) {
            this.spinner.hide();  
            this.getDataList();
                   
          }
          else {
            failMessage(response?.data?.message)
            this.spinner.hide();
          }
        },
          error => {
            this.spinner.hide();
          });
      }


      submit() {
        console.log(this.variables.isNew);
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
    
    getBranchData(id:any) {
        const param = {
          id: this.overViewForm.id
        };
        this.spinner.show();
        console.log('id--', this.overViewForm.id);
        let payload = new FormData();
        payload.append("id",id);
        this.dashboardService.getbranch(payload).subscribe((response: any) => {      
          this.spinner.hide();
          if (response && response.status === 200 && response.data) {
            const info = response.data;
            console.log('employee->', info);
            this.overViewForm= info;  
            this.variables.isNew=false;         
          }
          else {
            const info = response.data;
            console.log('employee ->', info);
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }


      getbranch() {
        this.spinner.show();
        let payload = new FormData();
        payload.append("type","branch");
        this.dashboardService.getType(payload).subscribe((response: any) => {      
          this.spinner.hide();
          if (response && response.status === 200 && response.data) {
            this.branchList = response.data;
           this.dummybranchList = response.data;
            
          }
          else {
            const info = response.data;
            console.log('branch ->', info);
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }


      getZones() {
        this.spinner.show();
        let payload = new FormData();
        payload.append("type","zone");
        this.dashboardService.getType(payload).subscribe((response: any) => {      
          this.spinner.hide();
          if (response && response.status === 200 && response.data) {
            this.zonesList = response.data;
           this.dummyZonesList = response.data;
            
          }
          else {
            const info = response.data;
            console.log('branch ->', info);
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }

      openItem(item:any)
      {
        this.getBranchData(item.id);
      }

      next()
      {
        console.log('this.overViewForm.id',this.overViewForm.id);
        this.overViewForm.id=parseInt(this.overViewForm.id)+1;
        console.log('this.overViewForm.id',this.overViewForm.id);
        this.getBranchData(this.overViewForm.id);
      }

      previous()
      {
        console.log('this.overViewForm.id',this.overViewForm.id);
        this.overViewForm.id=parseInt(this.overViewForm.id)-1;
        console.log('this.overViewForm.id',this.overViewForm.id);
        this.getBranchData(this.overViewForm.id);
      }



      checkCode() {
        const param = {
          code: this.overViewForm.code
        };
        this.spinner.show();
        console.log('code--', this.overViewForm.code);
        let payload = new FormData();
        payload.append("code",this.overViewForm.code);
        this.dashboardService.getbranchbycode(payload).subscribe((response: any) => {      
          this.spinner.hide();
          if (response && response.status === 200 && response.data) {
            const info = response.data;
            console.log('data->', info);
            failMessage('Code Already Exists In The System'); 
            this.variables.checkCode=true;
            console.log('this.variables.checkCode->',this.variables.checkCode);     
          }
          else {
            this.variables.checkCode=false;  
            console.log('this.variables.checkCode->',this.variables.checkCode); 
            this.save();    
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }







 
      ngOnInit()
      {
      }





}
