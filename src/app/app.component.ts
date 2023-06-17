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

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.userIsLogged();
    console.log(this.userLogged)
  }

  userIsLogged() {
    if (sessionStorage.getItem('prenom') != null){
      this.userLogged = true;
    }
    else{
      this.userLogged = false;
    }
  } 

  goToLogin() {
    this.router.navigateByUrl('/');
  }

  deconnexion() {

    if (this.userLogged) {
      sessionStorage.removeItem('nom');
      sessionStorage.removeItem('prenom');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('role');

      this.ngOnInit();
      this.router.navigateByUrl('/login');
    }

  }

}

