import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topup } from '../../models/topup';

@Component({
  selector: 'mw-add-topup',
  templateUrl: './add-topup.component.html',
  styleUrls: ['./add-topup.component.scss']
})
export class AddTopupComponent implements OnInit {

  @Output() addTopup: EventEmitter<Topup> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateBalance(newAmount, action) {
    this.addTopup.emit({amount: newAmount, type: action});
  }

}
