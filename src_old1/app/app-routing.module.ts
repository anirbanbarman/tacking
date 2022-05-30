import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { moveMessagePortToContext } from 'worker_threads';*/

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  }
 ,
  {
    path: 'startup',
    loadChildren: () => import('./pages/startup/startup.module').then(m=>m.StartupModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
