import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router,NavigationExtras } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../../services/dashboard.service';
import { failMessage, successMessage } from 'src/app/toaster/toaster';
import Swal from 'sweetalert2';
import { ApisService } from 'src/app/services/apis.service';
import { ActivatedRoute } from '@angular/router';
import * as xlsx from 'xlsx';
import { ViewChild, ElementRef } from '@angular/core';
import { ExportService } from 'src/app/services/export.service';
import {  Input, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
selector: 'app-vehicletype',
templateUrl: './vehicletype.component.html',
styleUrls: ['./vehicletype.component.scss']
})
export class VehicletypeComponent implements OnInit,AfterViewInit {

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

    variables: any = {
        isNew: true,
        checkcode: true
      }

    vehicletypeList: any[] = [];
    dummyvehicletypeList: any[] = [];
    dataList: any[] = [];
    dummyDataList: any[] = [];
    page: number = 1;
    dummy = [];
    maxid:number=0;
    minid:number=0;
    displayedColumns:any;

    dataSource:any;



    zonesList: any[] = [];
    dummyZonesList: any[] = [];

    modellist: any[] = [];
    dummyModellist: any[] = [];

    overViewForm: any = {
        id:  "",
        code:  "",
        model:  "",
        detentionchargeperday:  "",
        num_of_types:  "",
        bharat_stage: "",
        tyre_cost_per_km:  "",
        repairing_cost_per_km:  "",
        earning_per_day:  "",
        loading_capacity: ""
      }

    constructor(
        private dashboardService: DashboardService,
        private router: Router,
        public route: ActivatedRoute,
        private spinner: NgxSpinnerService,
        public api: ApisService,
        private exportService: ExportService

    )
    {
      this.getvehicletype();
      this.getZones();
      this.getDataList();
      this.getvehicletypemaxid();
      this.getvehicletypeminid();
      this.getModelList();
    }


  getDataList()
  {
    this.dashboardService.getAllvehicletype().subscribe((response:any)=>{
      console.log(response.data);
      //this.displayedColumns=Object.keys(response.data[0])
      //console.log(this.displayedColumns);
      this.displayedColumns = ['id', 'code', 'model','detentionchargeperday','num_of_types','bharat_stage','tyre_cost_per_km','repairing_cost_per_km','earning_per_day','loading_capacity','actions'];
      this.dataSource = new MatTableDataSource(response.data);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.displayedColumns,response.data)
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
          this.overViewForm.id= "";
          for (var key in this.overViewForm) {
            payload.append(key, this.overViewForm[key]);
          }

          this.dashboardService.savevehicletype(payload).subscribe((response: any) => {
            if (response && response?.status === 200) {
              this.spinner.hide();
              this.getDataList();
              this.getvehicletypemaxid();
              this.getvehicletypeminid();

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
        this.dashboardService.updatevehicletype(payload).subscribe((response: any) => {
          if (response && response?.status === 200) {
            this.spinner.hide();
            successMessage(response?.data?.message)
            this.getDataList();
            this.getvehicletypemaxid();
              this.getvehicletypeminid();

          }
          else if(response && response?.data?.message == "")
          {
            this.spinner.hide();
            successMessage(response?.data?.message)
            this.getDataList();
            this.getvehicletypemaxid();
              this.getvehicletypeminid();

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
        this.dashboardService.deletevehicletype(payload).subscribe((response: any) => {
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

    getvehicletypeData(id:any) {
        const param = {
          id: this.overViewForm.id
        };
        this.spinner.show();
        console.log('id--', this.overViewForm.id);
        let payload = new FormData();
        payload.append("id",id);
        this.dashboardService.getvehicletype(payload).subscribe((response: any) => {
          this.spinner.hide();
          if (response && response.status === 200 && response.data) {
            const info = response.data;
            console.log('vehicletype->', info);
            this.overViewForm= info;
            this.variables.isNew=false;
          }
          else {
            const info = response.data;
            console.log('vehicletype ->', info);
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }


      getvehicletype() {
        this.spinner.show();
        let payload = new FormData();
        payload.append("type","vehicletype");
        this.dashboardService.getType(payload).subscribe((response: any) => {
          this.spinner.hide();
          if (response && response.status === 200 && response.data) {
            this.vehicletypeList = response.data;
            this.dummyvehicletypeList = response.data;

          }
          else {
            const info = response.data;
            console.log('vehicletype ->', info);
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
            console.log('vehicletype ->', info);
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }

      openItem(item:any)
      {
        this.getvehicletypeData(item.id);
      }

      next()
      {


        console.log("this.maxid->",this.maxid);
        console.log("this.minid->",this.minid);
        console.log("this.overViewForm.id->",this.overViewForm.id);
        if(this.overViewForm.id==this.maxid)
        {
          failMessage("This is the last data");
        }
        else
        {
          console.log('this.overViewForm.id',this.overViewForm.id);
          this.overViewForm.id=parseInt(this.overViewForm.id)+1;
          console.log('this.overViewForm.id',this.overViewForm.id);
          this.getvehicletypeData(this.overViewForm.id);
        }
      }

      previous()
      {

       if(this.overViewForm.id==this.minid)
        {
          failMessage("This is the first data");
        }
        else
        {
          console.log('this.overViewForm.id',this.overViewForm.id);
          this.overViewForm.id=parseInt(this.overViewForm.id)-1;
          console.log('this.overViewForm.id',this.overViewForm.id);
          this.getvehicletypeData(this.overViewForm.id);
        }
      }


      checkCode() {
        const param = {
          code: this.overViewForm.code
        };
        this.spinner.show();
        console.log('code--', this.overViewForm.code);
        let payload = new FormData();
        payload.append("code",this.overViewForm.code);
        this.dashboardService.getvehicletypebycode(payload).subscribe((response: any) => {
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
      getvehicletypemaxid() {
        this.spinner.show();
        console.log("getvehicletypemaxid");
        this.dashboardService.getvehicletypemaxid().subscribe((response: any) => {
          this.spinner.hide();
          console.log("getvehicletypemaxid response->",response);
          if (response && response.status === 200 && response.data) {
            console.log(response);
            this.maxid = response.data.id;
            console.log("this.maxid->",this.maxid);
          }
          else {
            const info = response.data;
            console.log('vehicletype ->', info);
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }

      getvehicletypeminid() {
        this.spinner.show();
        console.log("getvehicletypeminid");
        this.dashboardService.getvehicletypeminid().subscribe((response: any) => {
          this.spinner.hide();
          console.log("getvehicletypeminid response->",response);
          if (response && response.status === 200 && response.data) {
            console.log(response);
            this.minid = response.data.id;
            console.log("this.minid->",this.minid);
          }
          else {
            const info = response.data;
            console.log('vehicletype->', info);
          }
        }, error => {
          this.spinner.hide();
          failMessage('Something went wrong');
          console.log(error);
        });
      }

      getModelList() {
        this.dashboardService.getAllvehiclemodel().subscribe((response:any)=>{
          console.log('Moel->',response.data);
          if (response && response.status === 200) {
          this.modellist = response.data;
          this.dummyModellist = response.data;
          }
          }, error => {
          console.log(error);
          failMessage('No Vehicle Found');
          });
      }









      ngOnInit()
        {
        }

        exportAsXLSX(): void {
          this.exportService.exportAsExcelFile(
            this.dataList,
            `data ${new Date().getMinutes()}`
          );
        }
        exportAsPDF() {
         this.exportService.exportPDF(this.dataList,"vehicletype.pdf")
        }


  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
      ngAfterViewInit() {
        console.log(this.dataSource)
       }

       applyFilter(filterValue: any) {
        filterValue.value = filterValue?.value.trim(); // Remove whitespace
        filterValue.value = filterValue?.value.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue.value;
      }






}
