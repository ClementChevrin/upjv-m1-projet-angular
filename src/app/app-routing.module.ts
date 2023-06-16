import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProjetComponent } from './projet/projet.component';
import { UserComponent } from './user/user.component';
import { AuthLoginGuard } from './auth-login.guard';

const routes: Routes = [

  {
    path : 'login',
    canActivate : [AuthLoginGuard],
    component : LoginComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'register',
    component : RegisterComponent 
  },
  {
    path : 'competence',
    component : CompetenceComponent  
  },
  {
    path : 'projet',
    component : ProjetComponent  
  },
  {
    path : 'users',
    component : UserComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
