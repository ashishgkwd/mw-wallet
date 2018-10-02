import { getActionTypeFromInstance } from '@ngxs/store';
import { LogoutUserAction } from '../state';

export function logoutPlugin(state, action, next) {
​
  // important to set default state with the root store name
  const defaultState = {
    user: {
      wallet: {},
      cards: {
        transactions: {
          log: []
        }
      }
    }
  };

  // Use the get action type helper to determine the type
  if (getActionTypeFromInstance(action) === LogoutUserAction.type) {
​
    // restore to default state
    state = { ...defaultState } ;
  }
​
  // return the next action handler with the empty state
  return next(state, action);
}
