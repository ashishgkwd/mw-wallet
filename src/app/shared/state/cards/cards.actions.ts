import { MetaInfo } from './cards.state';

export class CardsAction {
  static readonly type = '[Cards] Add card';
  constructor(public payload: MetaInfo) { }
}
