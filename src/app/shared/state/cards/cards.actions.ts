import { Card } from './cards.state';

export class CardsAction {
  static readonly type = '[Cards] Add card';
  constructor(public payload: Card) { }
}
