import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email?: string;
  mdp?: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }


  login() {

    let data = {
      email: this.email,
      mdp: this.mdp
    };

    this.http.post("http://localhost:4000/user/login", data).subscribe((resultData: any) => {

      if (resultData.status) {

        if (sessionStorage.getItem('email') == null) {
          sessionStorage.setItem('email', resultData.user.email);
          sessionStorage.setItem('role', resultData.user.role);
          sessionStorage.setItem('nom', resultData.user.nom);
          sessionStorage.setItem('prenom', resultData.user.prenom);

          this.router.navigateByUrl('/home');
        }

      } else {
        alert("Votre");
        console.log("Error login");
      }
    });
  }
}


