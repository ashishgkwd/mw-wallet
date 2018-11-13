import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    public ts;

  constructor() {
      this.ts = Date.now();
      console.log('TS init: ', this.ts);
  }
}
