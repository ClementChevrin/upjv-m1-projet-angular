import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IntegerType } from 'mongodb';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {

  nom?: string;
  description?: string;
  codeComp?: Array<string>;
  codePR?: string;
  enseigant?: string;
  numberOfProject: number = 0;

  competences: any[] = [];
  comProjet: any[] = [];

  // Appel au route
  constructor(private http: HttpClient, private router : Router) {
    this.getAllCpt();
    this.getNumberOfProject();
  }
  ngOnInit() {
  }

  getAllCpt() {

    this.http.get("http://localhost:4000/competences").subscribe((result: any) => {
      this.competences = result;
    })
  }

  getNumberOfProject() {

    this.http.get("http://localhost:4000/projet/numberOfProjet").subscribe((result: any) => {
      this.numberOfProject = result;
      this.numberOfProject = this.numberOfProject + 1;
    })
  }


  createProjet() {

    var comp = document.getElementsByClassName("comps");

    for (let i = 0; i < comp.length; i++) {

      var oneComp = comp[i] as HTMLInputElement;

      if (oneComp.checked === true) {
        this.comProjet.push(oneComp.value);
      }
    }

    let data = {
      "nom": this.nom,
      "description": this.description,
      "enseignant": sessionStorage.getItem('email')
    }

    console.log(sessionStorage.getItem('email'));

    this.http.post("http://localhost:4000/projet/create", data).subscribe((result: any) => {
      if (result.status){
      }
      else {
        alert(result.message);
      }
    });

    setTimeout(()=>{

      this.comProjet.forEach(comp => {
  
        let codeP = "PROJ"+this.numberOfProject;
  
        let data =
        {
          "codeP": codeP,
          "codeC": comp
        }
  
       
        this.http.post("http://localhost:4000/projet/create/competence", data).subscribe((result: any) => {
        })

    })},10000);
    

  }


}


/*getCompetences() {

    this.http.get("http://localhost:4000/competences").subscribe((result: any) => {
      this.competences = [];
      console.log("", result, "");

      result.forEach((comp: { nom: any, codeC: any, }) => {
        console.log(comp.nom, comp.codeC);
        this.itemCompetence = comp.nom;
        this.competences.push(this.itemCompetence);
        console.log(this.itemCompetence);
      });

    });
  }*/