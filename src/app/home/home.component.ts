import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  old_email : any = sessionStorage.getItem('email');
  prenom : any = sessionStorage.getItem('prenom');

  newPrenom! : string;
  newNom! : string;
  newMdp! : string;
  newEmail! : string;

  constructor(private http: HttpClient,private router : Router) { }
  ngOnInit() {
  }

  updateUser2(){

    let data = {
      "nom" : this.newNom,
      "prenom" : this.newPrenom,
      "old_email" : this.old_email,
      "mdp" : this.newMdp
    }

    this.http.post("http://localhost:4000/user/update",data).subscribe((result:any)=>{
      if(result.status){
        alert("Changement opéré");
        sessionStorage.clear();
        this.router.navigateByUrl('/');
      }else{
        alert("Erreur lors du changement d'informations");
      }
    })

  }

  getPrenom(){
    let prenom = sessionStorage.getItem('prenom');
    return prenom;
  }
  

}


