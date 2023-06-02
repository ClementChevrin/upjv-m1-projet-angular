import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email? : string;
  mdp? : string;

  isLogin? : boolean = true;

  constructor(private http : HttpClient,private router : Router){}
  ngOnInit():void{} 


login() {
  console.log(this.email);
  console.log(this.mdp);

  let data = {
    email: this.email,
    mdp: this.mdp
  };

  this.http.post("http://localhost:4000/user/login",data).subscribe((resultData: any) => {
    
  console.log(resultData);

  if(resultData.status){
    this.router.navigateByUrl('/home');
  }else{
    alert("Incorrect Mdp");
    console.log("Error login");
  }


});
}
}


