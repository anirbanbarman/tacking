import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vehiclesaleComponent } from '../vehiclesale/vehiclesale.component';

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
export class vehiclesaleAllRoutingModule { }
