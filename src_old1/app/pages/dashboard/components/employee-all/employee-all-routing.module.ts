import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { employeeComponent } from '../employee/employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    children: [
      {
        path: 'master/employee',
        component: employeeComponent
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class employeeAllRoutingModule { }
