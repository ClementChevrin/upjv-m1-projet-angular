import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  userLogged?: boolean;
  isAdmin: boolean = false;
  role : any;

  constructor(private http: HttpClient, private router: Router) {
   
  }

  ngOnInit() {
    this.userIsLogged();
    this.roleUser();
  }

  userIsLogged() {
    if (sessionStorage.getItem('prenom') != null){
      this.userLogged = true;
    }
    else{
      this.userLogged = false;
    }
  } 
  
  roleUser(){
    this.role = sessionStorage.getItem('role');
  }

  
  goToLogin() {
    this.router.navigateByUrl('/');
  }

  goToProjets(){
    this.router.navigateByUrl('home-teacher/projets');
  }

  goToEtudiants(){
    this.router.navigateByUrl('/home-teacher');
  }

  goToMonCompte(){
    this.router.navigateByUrl('/home');
    console.log("fzdz");
  }

  goToMesProjets(){
    this.router.navigateByUrl('/home-student');
  }
  

  deconnexion() {

    if (this.userLogged) {
      sessionStorage.removeItem('nom');
      sessionStorage.removeItem('prenom');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('role');

      this.ngOnInit();
      this.router.navigateByUrl('/');
    }

  }

}

