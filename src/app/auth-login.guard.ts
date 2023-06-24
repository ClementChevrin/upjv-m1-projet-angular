import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  constructor(private router : Router,private location : Location){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

    const logged = sessionStorage.getItem('prenom');
    const role = sessionStorage.getItem('role');

    if(logged != null){
      if(role == "Etudiant"){
        this.router.navigateByUrl('home-student');
      }else{
          if(role == "Enseignant"){
            this.router.navigateByUrl('home-teacher');
        }
      }
      return false;
    }
    return true;

  }
  
}
