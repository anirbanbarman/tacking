import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SweetAlert2Module,
    NgxPaginationModule,
    NgxSkeletonLoaderModule,
    

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
