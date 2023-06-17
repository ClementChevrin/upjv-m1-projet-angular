import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  // Variable pour stocker l'e-mail entré par l'utilisateur
  email?: string;
  // Variable pour stocker le mot de passe entré par l'utilisateur
  mdp?: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  login() {
    // Information de connexion
    let data = {
      email: this.email,
      mdp: this.mdp
    };

    // Envoyer une requête POST au serveur pour vérifier les informations de connexion
    this.http.post("http://localhost:4000/user/login", data).subscribe((resultData: any) => {

      if (resultData.status) {

        // Si les informations de connexion sont valides, enregistrer les détails de l'utilisateur dans la session
        if (sessionStorage.getItem('email') == null) {
          sessionStorage.setItem('email', resultData.user.email);
          sessionStorage.setItem('role', resultData.user.role);
          sessionStorage.setItem('nom', resultData.user.nom);
          sessionStorage.setItem('prenom', resultData.user.prenom);
          // Rediriger l'utilisateur vers la page d'accueil
          this.router.navigateByUrl('/home');
        }
      } else {
        // Si les informations de connexion sont valides, indiquez un erreur en fonction du type d'erreur
        let error_p = document.getElementById("error-message");
        if (error_p) {
          if (data.email == undefined) {
            error_p.innerHTML = "Veuillez renseigner une adresse mail";
          }
          else if (data.mdp == undefined) {
            error_p.innerHTML = "Veuillez renseigner un mot de passe";
          }
          else {
            error_p.innerHTML = "Votre mot de passe est incorrect ou compte inexistant";
          }
        }
        console.error("Une erreur de connexion s'est produite");
      }
    });
  }
}


