import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { brokerComponent } from '../broker/broker.component';

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
        path: 'master/broker',
        component: brokerComponent
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class brokerAllRoutingModule { }
