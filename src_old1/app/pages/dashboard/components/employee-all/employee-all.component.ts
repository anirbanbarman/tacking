import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';






@Component({
selector: 'app-employee',
templateUrl: './employee-all.component.html',
styleUrls: ['./employee-all.component.scss']
})
export class EmployeeAllComponent implements OnInit {
constructor(
private dashboardService: DashboardService,
private router: Router,
private spinner: NgxSpinnerService,
public api: ApisService, 
) { 
this.getemployeeList();
}

dummy = [];
page: number = 1;
employeelist: any[] = [];
dummemployeelist: any[] = [];

id: any[] = [];
	status: any[] = [];
	employeeid: any[] = [];
	name: any[] = [];
	department: any[] = [];
	joiningdate: any[] = [];
	designation: any[] = [];
	qualification: any[] = [];
	dateofbirth: any[] = [];
	presentaddress: any[] = [];
	permanentaddress: any[] = [];
	gendar: any[] = [];
	phonenumber: any[] = [];
	email: any[] = [];
	bloodgroup: any[] = [];
	pan: any[] = [];
	aadhar: any[] = [];
	pfnumber: any[] = [];
	esinumber: any[] = [];
	city: any[] = [];
	releasedate: any[] = [];
	releasereason: any[] = [];
	experience: any[] = [];
	uan: any[] = [];
	ctcn: any[] = [];
	maritialstatus: any[] = [];
	bankaccountno: any[] = [];
	bankname: any[] = [];
	ifsc: any[] = [];
	deputedlocation: any[] = [];
	fathername: any[] = [];
	fatherdob: any[] = [];
	mothername: any[] = [];
	motherdob: any[] = [];
	spousename: any[] = [];
	spousedob: any[] = [];
	child1name: any[] = [];
	child1dob: any[] = [];
	child2name: any[] = [];
	child2dob: any[] = [];
	image: any[] = [];
	aadharimage: any[] = [];
	panimage: any[] = [];
	bankaccountimage: any[] = [];
	quanlificationimage: any[] = [];
	



 
ngOnInit(): void {}

getemployeeList()
{
this.dashboardService.getAllEmployee().subscribe((response:any)=>{
console.log(response.data);
this.dummy = [];
if (response && response.status === 200) {
this.employeelist = response.data;
this.dummemployeelist = response.data;
}
}, error => {
console.log(error);
failMessage('Something went wrong');
this.dummy = [];
});
}


Openemployee(item:any)
{
console.log(item);
const navData: NavigationExtras = {
queryParams: {
id: item.id
}
};
this.router.navigate(['/dashboard/home//master/employee'], navData);
}


createNew(){
this.router.navigate(['/dashboard/home//master/employee']); 
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
