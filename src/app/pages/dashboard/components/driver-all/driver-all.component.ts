import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';






@Component({
selector: 'app-driver',
templateUrl: './driver-all.component.html',
styleUrls: ['./driver-all.component.scss']
})
export class DriverAllComponent implements OnInit {
constructor(
private dashboardService: DashboardService,
private router: Router,
private spinner: NgxSpinnerService,
public api: ApisService, 
) { 
this.getdriverList();
}

dummy = [];
page: number = 1;
driverlist: any[] = [];
dummdriverlist: any[] = [];

id: any[] = [];
status: any[] = [];
name: any[] = [];
address: any[] = [];
licenseno: any[] = [];
rto: any[] = [];
contactnumber: any[] = [];
aadhar: any[] = [];
pan: any[] = [];
licsenseexpirydate: any[] = [];
bankaccountno: any[] = [];
ifsc: any[] = [];
bankname: any[] = [];
vehicle: any[] = [];
fathername: any[] = [];
pic: any[] = [];
aadharpic: any[] = [];
panpic: any[] = [];
licensepic: any[] = [];
bankdetailspic: any[] = [];



 
ngOnInit(): void {}

getdriverList()
{
this.dashboardService.getAllDriver().subscribe((response:any)=>{
console.log(response.data);
this.dummy = [];
if (response && response.status === 200) {
this.driverlist = response.data;
this.dummdriverlist = response.data;
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
this.getdriverList();
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

Opendriver(item:any)
{
console.log(item);
const navData: NavigationExtras = {
queryParams: {
id: item.id
}
};
this.router.navigate(['/dashboard/home//master/driver'], navData);
}


createNew(){
this.router.navigate(['/dashboard/home//master/driver']); 
}

getClass(item:any) {
if (item === '1') {
return 'btn btn-success btn-round';
} else if (item === '0') {
return 'btn btn-danger btn-round';
}
return 'btn btn-warning btn-round';
}



}
