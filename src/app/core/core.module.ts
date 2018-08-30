import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { UserState, TransactionsState } from '../shared/state';
import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import { WalletState } from '../shared/state/wallet/wallet.state';
import { CardsState } from '../shared/state/cards/cards.state';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forRoot([
      UserState,
      WalletState,
      CardsState,
      TransactionsState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  declarations: [ShellComponent]
})
export class CoreModule { }
