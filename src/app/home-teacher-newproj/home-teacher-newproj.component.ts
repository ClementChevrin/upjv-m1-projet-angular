import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IntegerType } from 'mongodb';

@Component({
  selector: 'app-home-teacher-newproj',
  templateUrl: './home-teacher-newproj.component.html',
  styleUrls: ['./home-teacher-newproj.component.css']
})
export class HomeTeacherNewprojComponent {

  nom?: string;
  description?: string;
  codeComp?: Array<string>;
  codePR?: string;
  enseigant?: string;

  competences: any[] = [];

  // Appel au route
  constructor(private http: HttpClient) { this.getAllCpt() }
  ngOnInit() {
  }

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
      "codeComp": ["", ""],
      "codePR": this.codePR,
      "enseignant": this.enseigant
    }

  }
}
