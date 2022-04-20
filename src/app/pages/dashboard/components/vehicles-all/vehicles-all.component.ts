import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles-all.component.html',
  styleUrls: ['./vehicles-all.component.scss']
})
export class VehiclesAllComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private spinnerService: NgxSpinnerService,
   
  ) { }
 
  dummy = Array(5);
  page: number = 1;
  vehcilelist: any[] = [];
  
  id: any[] = [];
  vehcileno: any[] = [];
  make: any[] = [];
  model: any[] = [];
  driver: any[] = [];
  status: any[] = [];

  

   
  ngOnInit(): void {
  }

  createNew(){
    this.router.navigate(['/dashboard/home//master/vehicles']);
   
  }

  

}
