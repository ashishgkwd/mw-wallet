import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mw-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  @Select(state => state.user.balance)
  currentBalance$:Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
