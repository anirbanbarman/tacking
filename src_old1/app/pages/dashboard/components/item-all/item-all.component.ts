import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';






@Component({
selector: 'app-item',
templateUrl: './item-all.component.html',
styleUrls: ['./item-all.component.scss']
})
export class ItemAllComponent implements OnInit {
constructor(
private dashboardService: DashboardService,
private router: Router,
private spinner: NgxSpinnerService,
public api: ApisService, 
) { 
this.getitemList();
}

dummy = [];
page: number = 1;
itemlist: any[] = [];
dummitemlist: any[] = [];

status: any[] = [];
code: any[] = [];
description: any[] = [];
rate: any[] = [];
unit: any[] = [];
type: any[] = [];
hsn: any[] = [];
gst: any[] = [];
image: any[] = [];



 
ngOnInit(): void {}

getitemList()
{
this.dashboardService.getAllItem().subscribe((response:any)=>{
console.log(response.data);
this.dummy = [];
if (response && response.status === 200) {
this.itemlist = response.data;
this.dummitemlist = response.data;
}
}, error => {
console.log(error);
failMessage('Something went wrong');
this.dummy = [];
});
}



Openitem(item:any)
{
console.log(item);
const navData: NavigationExtras = {
queryParams: {
id: item.id
}
};
this.router.navigate(['/dashboard/home//master/item'], navData);
}


createNew(){
this.router.navigate(['/dashboard/home//master/item']); 
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
