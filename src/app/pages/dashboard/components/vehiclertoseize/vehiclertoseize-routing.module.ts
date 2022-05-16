import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { vehiclertoseizeComponent } from '../vehiclertoseize/vehiclertoseize.component';

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
export class vehiclertoseizeAllRoutingModule { }
