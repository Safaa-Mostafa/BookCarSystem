import { GlobalService } from 'src/app/services/global.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  token:any
  constructor(public global: GlobalService  ){
  }
}

