import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';
import { ActivatedRoute } from '@angular/router';


@Component({
selector: 'app-parameters',
templateUrl: './parameters.component.html',
styleUrls: ['./parameters.component.scss']
})
export class parametersComponent implements OnInit {

    variables: any = {
        isNew: true,
      }

    overViewForm: any = {
        id:  1,
        goodtax:  "",
        roadtax:  "",
        fitnesstax:  "",
        pollutiontax:  "",
        othertax:  "",
        npstate:  "",
        npyear:  "",
        insurance:  "",
        bhata:  "",
    }


    constructor(
        private dashboardService: DashboardService,
        private router: Router,
        public route: ActivatedRoute,
        private spinner: NgxSpinnerService,
        public api: ApisService, 
    ) { }

    save() {
        this.spinner.show();
        let payload = new FormData();
        id: this.overViewForm.id;
        for (var key in this.overViewForm) {
          payload.append(key, this.overViewForm[key]);
        }
        this.dashboardService.updateparameters(payload).subscribe((response: any) => {
          if (response && response?.status === 200) {
            this.spinner.hide();     
                   
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
    
    getParameter(id:any) {
        const param = {
          id: this.overViewForm.id
        };
        this.spinner.show();
        console.log('id--', this.overViewForm.id);
        let payload = new FormData();
        payload.append("id",id);
        this.dashboardService.getparameters(payload).subscribe((response: any) => {      
          this.spinner.hide();
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
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }







 
      ngOnInit()
      {
        this.getParameter(this.overViewForm.id);
       /**this.route.queryParams.subscribe((data: any) => {
       console.log(data);
       if (data && data.id) {
         this.overViewForm.id = data.id;
         this.variables.isNew = false;
         console.log(this.variables.isNew);
         this.getParameter(data.id);
       } else {
         this.variables.isNew = true;
         this.getParameter(data.id);
       }
       });**/
     }





}
