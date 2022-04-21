import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';






@Component({
selector: 'app-vehicles',
templateUrl: './vehicles-all.component.html',
styleUrls: ['./vehicles-all.component.scss']
})
export class VehiclesAllComponent implements OnInit {
constructor(
private dashboardService: DashboardService,
private router: Router,
private spinner: NgxSpinnerService,
public api: ApisService, 
) { 
this.getVehicleList();
}

dummy = [];
page: number = 1;
vehiclelist: any[] = [];
dummvehiclelist: any[] = [];

id: any[] = [];
vehicleno: any[] = [];
make: any[] = [];
model: any[] = [];
driver: any[] = [];
status: any[] = [];
image: any[] = [];
costPrice:any[] = [];
financer:any[] = [];
loanAccountNo:any[] = [];
emi:any[] = [];
emiStartDate:any[] = [];
emiEndDate:any[] = [];
emiDuration:any[] = [];
loanAmount:any[] = [];
interestPercentage:any[] = [];
insuranceCompany:any[] = [];
insuranceNumber:any[] = [];
insurancevalidupto:any[] = [];
pollutionvalidity:any[] = [];
taxtokenno:any[] = [];
issuedByRTO:any[] = [];
taxTokenValidity:any[] = [];
permitNo:any[] = [];
permitIssuedByRTO:any[] = [];
permitState:any[] = [];
permitStartDate:any[] = [];
permitEndDate:any[] = [];
permitANo:any[] = [];
permitAIssuedByRTO:any[] = [];
permitAState:any[] = [];
permitAStartDate:any[] = [];
permitAEndDate:any[] = [];
fitnessIssuedBy:any[] = [];
fitnessValidity: any[] = [];



 
ngOnInit(): void {}

getVehicleList()
{
this.dashboardService.getAllVehicles().subscribe((response:any)=>{
console.log(response.data);
this.dummy = [];
if (response && response.status === 200) {
this.vehiclelist = response.data;
this.dummvehiclelist = response.data;
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
this.getVehicleList();
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

OpenVehicle(item:any)
{
console.log(item);
const navData: NavigationExtras = {
queryParams: {
id: item.id
}
};
this.router.navigate(['/dashboard/home//master/vehicles'], navData);
}


createNew(){
this.router.navigate(['/dashboard/home//master/vehicles']); 
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
