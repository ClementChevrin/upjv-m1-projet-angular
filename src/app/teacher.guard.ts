import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const role = sessionStorage.getItem('role');

    if(role != "Enseignant"){
      if(role == "Etudiant"){
        this.router.navigateByUrl('home-student');
        
      }else{
        this.router.navigateByUrl('users');
      }
      return false;
    }


    return true;
  }
  
}
