import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vehicletyperateComponent } from '../vehicletyperate/vehicletyperate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class vehicletyperateAllRoutingModule { }
