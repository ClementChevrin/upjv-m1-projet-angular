import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const admin = sessionStorage.getItem('role');

    let currentUrl = this.router.url;

    if(admin != "admin"){
     this.router.navigateByUrl(currentUrl);
      return false;
    }
    return true;
  }
  
}
