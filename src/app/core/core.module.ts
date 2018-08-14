import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { UserState, TransactionsState } from '../shared/state';
import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forRoot([
      UserState,
      TransactionsState
    ])
  ],
  declarations: [ShellComponent]
})
export class CoreModule { }
