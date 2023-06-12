import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IntegerType } from 'mongodb';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {

  nom?: string;
  description?: string;
  codeCR?: Array<string>;
  codeCO?: Array<string>;
  codePR?: string;
  enseigant?: string;
  competences: any[] = [];

  // Appel au route
  constructor(private http: HttpClient) { this.getAllCpt() }
  ngOnInit() {
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

  getAllCpt() {

    this.http.get("http://localhost:4000/competences").subscribe((result: any) => {
      this.competences = result;
    })
  }

  createProjet() {

    let Data =
    {
      "nom": this.nom,
      "description": this.description,
      "codeCR": ["", ""],
      "codeCA": ["", ""],
      "codePR": this.codePR,
      "enseignant": this.enseigant
    }

  }

}
