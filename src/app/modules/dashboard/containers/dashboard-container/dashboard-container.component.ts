import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'mw-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor(private alertService: AlertService) {
    console.log('Dashboard TS: ', this.alertService.ts);
   }

  ngOnInit() {
  }

}
