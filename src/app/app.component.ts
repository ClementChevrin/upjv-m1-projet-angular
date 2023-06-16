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

  userLogged : boolean = false;
  isAdmin : boolean = false;

  constructor(private http: HttpClient, private router : Router) { }
  ngOnInit() {

    this.userlogged();
  }

  userlogged(){

  if(sessionStorage.getItem('prenom') != null)
    this.userLogged = true;
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }

}

