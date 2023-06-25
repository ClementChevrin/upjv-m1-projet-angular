import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

    var role = sessionStorage.getItem('role');
    console.log(role);

    if(role != "Etudiant"){
      if(role == "Enseignant"){
        this.router.navigateByUrl('home-teacher');
        return false;
      }else{
        this.router.navigateByUrl('users');
        return false;
      }
    }

    return true;
  }
  
}
