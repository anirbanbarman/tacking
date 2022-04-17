import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){

  }
  title = 'duare-councillor';
}
