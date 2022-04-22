import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';






@Component({
selector: 'app-broker',
templateUrl: './broker-all.component.html',
styleUrls: ['./broker-all.component.scss']
})
export class BrokerAllComponent implements OnInit {
constructor(
private dashboardService: DashboardService,
private router: Router,
private spinner: NgxSpinnerService,
public api: ApisService, 
) { 
this.getBrokerList();
}

dummy = [];
page: number = 1;
brokerlist: any[] = [];
dummbrokerlist: any[] = [];

id: any[] = [];
status: any[] = [];
company: any[] = [];
code: any[] = [];
contactperson: any[] = [];
branch: any[] = [];
email: any[] = [];
pan: any[] = [];
address: any[] = [];
pin: any[] = [];
state: any[] = [];
contactnumber1: any[] = [];
contactnumber2: any[] = [];
contactnumber3: any[] = [];
contactperson2: any[] = [];
contactperson2contactnumber1: any[] = [];
contactperson2contactnumber2: any[] = [];
zone: any[] = [];
remarks: any[] = [];
accountno: any[] = [];
ifsc: any[] = [];
bank: any[] = [];
bankbranch: any[] = [];
image: any[] = [];
panimage: any[] = [];
gstcertificateimage: any[] = [];
bankaccountimage: any[] = [];



 
ngOnInit(): void {}

getBrokerList()
{
this.dashboardService.getAllBroker().subscribe((response:any)=>{
console.log(response.data);
this.dummy = [];
if (response && response.status === 200) {
this.brokerlist = response.data;
this.dummbrokerlist = response.data;
}
}, error => {
console.log(error);
failMessage('Something went wrong');
this.dummy = [];
});
}

update(item:any, value:any)
{
console.log('home', item);
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
const param = {
id: item.id,
in_home: item.in_home === '1' ? 0 : 1
};
this.spinner.show();
this.api.post_private('services/editList', param).then((datas) => {
this.spinner.hide();
this.getBrokerList();
}, error => {
this.spinner.hide();
failMessage('Something went wrong');
console.log(error);
}).catch(error => {
this.spinner.hide();
console.log(error);
failMessage('Something went wrong');
});
}
});

}

Openbroker(item:any)
{
console.log(item);
const navData: NavigationExtras = {
queryParams: {
id: item.id
}
};
this.router.navigate(['/dashboard/home//master/broker'], navData);
}


createNew(){
this.router.navigate(['/dashboard/home//master/broker']); 
}

getClass(item:any) {
if (item === '1') {
return 'btn btn-primary btn-round';
} else if (item === '0') {
return 'btn btn-danger btn-round';
}
return 'btn btn-warning btn-round';
}



}
