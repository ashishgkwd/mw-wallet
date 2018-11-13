import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'mw-topup-container',
  templateUrl: './topup-container.component.html',
  styleUrls: ['./topup-container.component.scss']
})
export class TopupContainerComponent implements OnInit {

  constructor(private alertService: AlertService) {
    console.log('Topup TS: ', this.alertService.ts);
   }

  ngOnInit() {
  }

}
