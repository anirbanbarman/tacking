import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';






@Component({
selector: 'app-supplier',
templateUrl: './supplier-all.component.html',
styleUrls: ['./supplier-all.component.scss']
})
export class SupplierAllComponent implements OnInit {
constructor(
private dashboardService: DashboardService,
private router: Router,
private spinner: NgxSpinnerService,
public api: ApisService, 
) { 
this.getSupplierlist();
}

dummy = [];
page: number = 1;
Supplierlist: any[] = [];
dummSupplierlist: any[] = [];

id: any[] = [];
name:any[] = [];
    gst:any[] = [];
    acccounttype:any[] = [];
    registeredaddress:any[] = [];
    billingaddress:any[] = [];
    contactnumber:any[] = [];
    email:any[] = [];
    group:any[] = [];
    contactperson:any[] = [];
    contactpersoncontactnumber:any[] = [];
    contactpersonemail:any[] = [];
    accountant:any[] = [];
    accountantcontactnumber:any[] = [];
    accountantemail:any[] = [];
    owner1:any[] = [];
    owner2:any[] = [];
    firmtype:any[] = [];
    tan:any[] = [];
    pan:any[] = [];
    creditduration:any[] = [];
    billingbase:any[] = [];
    controlbranch:any[] = [];
    startdate:any[] = [];
    openingbalance:any[] = [];
    image:any[] = [];
    panimage:any[] = [];
    aadharimage:any[] = [];
    bankaccountimage:any[] = [];



 
ngOnInit(): void {}

getSupplierlist()
{
this.dashboardService.getAllSupplier().subscribe((response:any)=>{
console.log(response.data);
this.dummy = [];
if (response && response.status === 200) {
this.Supplierlist = response.data;
this.dummSupplierlist = response.data;
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
this.getSupplierlist();
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

OpenSupplier(item:any)
{
console.log(item);
const navData: NavigationExtras = {
queryParams: {
id: item.id
}
};
this.router.navigate(['/dashboard/home//master/supplier'], navData);
}


createNew(){
this.router.navigate(['/dashboard/home//master/supplier']); 
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
