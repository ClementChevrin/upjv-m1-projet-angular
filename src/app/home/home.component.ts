import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  getPrenom(){
    let prenom = sessionStorage.getItem('prenom');
    return prenom;
  }
  

}


