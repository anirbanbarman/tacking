import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { itemComponent } from '../item/item.component';

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
        path: 'master/item',
        component: itemComponent
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemAllRoutingModule { }
