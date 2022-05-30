import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vehiclebodyComponent } from '../vehiclebody/vehiclebody.component';

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
export class vehiclebodyAllRoutingModule { }
