import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { parametersComponent } from '../parameters/parameters.component';

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
export class parametersAllRoutingModule { }
