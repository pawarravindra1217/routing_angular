import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.isUserAuthenticated()) {
        alert('invalid token access denied')
        this.router.navigate(['/dashboard']);
      }
    return this.isUserAuthenticated();
  }
  
  isUserAuthenticated() {
    let token = localStorage.getItem('token');
    if(token === '1234') {
      return true;
    } else {
      return false
    }
  }
}
