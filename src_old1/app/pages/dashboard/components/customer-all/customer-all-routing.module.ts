import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { customerComponent } from '../customer/customer.component';

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
        path: 'master/customer',
        component: customerComponent
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class customerAllRoutingModule { }
