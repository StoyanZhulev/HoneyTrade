import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
      private router: Router,
      private cookieService: CookieService
    ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cookieService.get('userRole') !== 'admin') {
      console.log(next.params)
       this.router.navigate(['/auth/login'])
    }
    return true;
  }
}