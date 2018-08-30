import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mw-txn-list',
  templateUrl: './txn-list.component.html',
  styleUrls: ['./txn-list.component.scss']
})
export class TxnListComponent implements OnInit {

  @Input() transferList: [];

  constructor() { }
  

  ngOnInit() {
  }

}
