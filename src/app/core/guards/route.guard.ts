// can-deactivate-guard.service.ts
import { Injectable, Component } from '@angular/core';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivationGuarded {
  canDeactivate(nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<DeactivationGuarded>, CanActivateChild {

  constructor(private router: Router) {}

  canDeactivate(
    component: DeactivationGuarded,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate(nextState) : true;
  }

  canActivateChild() {
    console.log('force redirect to login');
    this.router.navigate(['/login']);
    return false;
  }
}
