import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // Champs des utililisateurs à afficher
  nom?: string;
  prenom?: string;
  email?: string;
  role?: string;
  mdp?: string;
  listUsers: any[] = [];

  // Nouvelle valeurs à appliquer
  userToChange?: string;
  newNom?: string;
  newPrenom?: string;
  newEmail?: string;
  newMdp?: string;


  // Appel au route
  constructor(private http: HttpClient,private router : Router) { this.getAllUsers() }
  ngOnInit() {
  }

  getAllUsers() {
    this.http.get("http://localhost:4000/users")
      .subscribe((result: any) => {
        console.log(result);
        this.listUsers = result;
      });
  }

  goToRegister(){
    this.router.navigateByUrl('/register');
  }

  updateUser1(event: { target: any; srcElement: any; currentTarget: any; }) {

    // Récupération du compte à modifier
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    this.userToChange = value;

    let updateButton = document.getElementsByClassName("updateBtn") as HTMLCollectionOf<Element>;
    var updateDive = document.querySelector("#updateDiv") as HTMLElement;

    for (let i = 0; i < updateButton.length; i++) {

      updateButton[i].addEventListener("click", function () {
        if (updateDive != null) {
          updateDive.style.display = "block";
          updateDive.style.border = "solid gray";
        }

      })
    }
  }

  updateUser2() {

    let data =
    {
      prenom: this.newPrenom,
      nom: this.newPrenom,
      old_email: this.userToChange,
      new_email: this.newEmail,
      mdp: this.newMdp
    }

    this.http.post("http://localhost:4000/user/update", data).subscribe((result: any) => {

      alert(result.message);
      window.location.reload();

    });

  }

  deleteOneUser(event: { target: any; srcElement: any; currentTarget: any; }) {

    // Récupération de l'adresse
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    let data =
    {
      email: value
    };


    this.http.post("http://localhost:4000/user/delete", data).subscribe((result: any) => {
      
      alert(result.message)
      window.location.reload();

    });


  }

  /*
  getUsers() {
    this.http.get("http://localhost:4000/users").subscribe((result: any) => {
    result.forEach((userDb: { prenom: any;nom:any;email : any;role:any}) => {
        console.log(userDb.prenom+" "+userDb.nom);
      });

    return result;

    });
  } */

}
