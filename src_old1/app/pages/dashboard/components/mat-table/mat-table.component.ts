import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit,AfterViewInit{
  dataSource:any;
  @Input() dataList:any;
  @Input() displayedColumns:any;

@ViewChild(MatPaginator) paginator !: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

constructor() {
  console.table(this.dataList);
  console.table(this.displayedColumns)


  // Assign the data to the data source for the table to render
}
ngOnInit(): void {

  console.table(this.dataList);
  console.table(this.displayedColumns)
  this.dataSource = new MatTableDataSource(this.dataList);
  
}

/**
 * Set the paginator and sort after the view init since this component will
 * be able to query its view for the initialized paginator and sort.
 */
ngAfterViewInit() {
  console.table(this.dataList);
  console.table(this.displayedColumns)
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(filterValue: any) {
  filterValue.value = filterValue?.value.trim(); // Remove whitespace
  filterValue.value = filterValue?.value.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue.value;
}
}







