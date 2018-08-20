import { Component, OnInit, Input } from '@angular/core';
import { Transfer } from './transfer';
import { Observable } from 'rxjs';

@Component({
  selector: 'mm-transfers',
  templateUrl: './mm-transfers.component.html',
  styles: []
})
export class MmTransfersComponent implements OnInit {

  @Input() transferList:Observable<Transfer[]>;

  constructor() { }

  ngOnInit() {
  }

}
