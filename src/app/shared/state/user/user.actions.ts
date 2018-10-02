export class IncrementUserBalance {
  static readonly type = '[User] Increment Balance';
  constructor(public payload: {amount: number}) { }
}

export class DecrementUserBalance {
  static readonly type = '[User] Decrement Balance';
  constructor(public payload: {amount: number}) { }
}

export class LogoutUserAction {
  static readonly type = '[User] Logout';
  constructor(public payload: {}) { }
}
