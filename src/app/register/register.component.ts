import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  prenom? : string;
  nom? : string;
  email? : string;
  mdp? : string;
  role ? : string;

// Appel au route
constructor(private http : HttpClient, private router : Router){}
ngOnInit():void{}


createUser(){

  // Format JSON
  let data =
  {
    "prenom" : this.prenom,
    "nom" : this.nom,
    "email" : this.email,
    "mdp" : this.mdp,
    "role" : this.role,
  };

  this.http.post("http://localhost:4000/user/create",data).subscribe((result : any) =>
  {
    if(result.status){
    alert("Utilisateur enregistré");
    this.router.navigateByUrl("/users");
    }
    
    else{
      alert(result.message);
    }
  });

}


}