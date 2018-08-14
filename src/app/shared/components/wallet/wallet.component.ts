import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mw-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() userBalance:number;
  
  constructor() { }

  ngOnInit() {
  }
}
