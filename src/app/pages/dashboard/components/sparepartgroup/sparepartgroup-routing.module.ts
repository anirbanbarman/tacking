import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sparepartgroupComponent } from '../sparepartgroup/sparepartgroup.component';

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
export class sparepartgroupAllRoutingModule { }
