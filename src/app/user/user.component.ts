import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  nom?: string;
  prenom?: string;
  email?: string;
  role?: string;
  listUsers: any[] = [];

  // Appel au route
  constructor(private http: HttpClient) { this.getAllUsers() }
  ngOnInit() 
  { 
  }

  getAllUsers()
  {
    this.http.get("http://localhost:4000/users")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.listUsers = result;
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
