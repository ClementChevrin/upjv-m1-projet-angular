import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IntegerType } from 'mongodb';
import { ProjetComponent } from '../projet/projet.component';


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
  constructor(private http: HttpClient,private router : Router) { this.getAllCpt() }
  ngOnInit() {
  }

  getAllCpt() {

    this.http.get("http://localhost:4000/competences").subscribe((result: any) => {
      this.competences = result;
    })
  }


}
