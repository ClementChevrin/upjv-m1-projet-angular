import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-teacher-projets',
  templateUrl: './home-teacher-projets.component.html',
  styleUrls: ['./home-teacher-projets.component.css']
})
export class HomeTeacherProjetsComponent {

  mesProjets: any[] = [];
  mesCompetences : any[] =[];
  enseignant: any = sessionStorage.getItem('email');


  constructor(private router: Router, private http: HttpClient) {

    this.getMesProjets();
  }

  createProjet(){
    this.router.navigateByUrl('home-teacher/newproj');
    }
  
  getMesProjets() {

    let param = { "enseignant": this.enseignant };
    const myUrl = "http://localhost:4000/projet/Mesprojets";

    this.http.get(myUrl, { params: param }).subscribe((result: any) => {
        console.log(result);
        this.mesProjets = result;

      });
  
  }

}
