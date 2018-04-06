import { Injectable } from '@angular/core';
import { CanActivate, 
          ActivatedRouteSnapshot, 
          RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


// Entry guard
@Injectable()
export class CanEditGuard implements CanActivate {
  // return true or false
  // return true, user can see the page
  // return false, user shall stay in same page
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      console.log("Can Edit Guard ");
      const id = next.params['id'];
      console.log("can load product ", id);

      let result = window.confirm("Want to edit the data?");

      return result;
  }
}
