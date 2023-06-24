import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {

  nom?: string;
  description?: string;
  codeC?: string;

  // Appel au route
  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

  createCompetence() {

    // Format JSON
    let data =
    {
      "nom": this.nom,
      "description": this.description
    };

    this.http.post("http://localhost:4000/competence/create", data).subscribe((result: any) => {
      if (result.status) {
        alert("Competence créé");
        location.reload();
      }else{
        alert(result.message);
        console.log(result);
      }
    });

  }

}
