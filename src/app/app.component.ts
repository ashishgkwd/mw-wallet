import { Component } from '@angular/core';
import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'mw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Wallet';

  constructor(private alertService: AlertService) {
    console.log('AppComponent: ', this.alertService);
  }
}
