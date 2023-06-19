import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProjetComponent } from './projet/projet.component';
import { UserComponent } from './user/user.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeStudentNewprojComponent } from './home-student-newproj/home-student-newproj.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HomeStudentNoteprojComponent } from './home-student-noteproj/home-student-noteproj.component';


const routes: Routes = [
  {
    path: '', // Chemin racine (route par défaut)
    component: LoginComponent // Composant à afficher lorsque le chemin est vide (Page de connexion)
  },
  {
    path: 'home', // Chemin "/home"
    component: HomeComponent // Composant à afficher lorsque le chemin est "/home" (rien)
  },
  {
    path: 'home-student', // Chemin "/home-student"
    component: HomeStudentComponent // Composant à afficher lorsque le chemin est "/home" (Liste des projet de l'étudiant)
  },
  {
    path: 'home-student/newproj', // Chemin "/home-student"
    component: HomeStudentNewprojComponent // Composant à afficher lorsque le chemin est "/home" (Liste des projet de l'étudiant)
  },
  {
    path: 'home-student/noteproj/:id', // Chemin "/home-student"
    component: HomeStudentNoteprojComponent // Composant à afficher lorsque le chemin est "/home" (Liste des projet de l'étudiant)
  },
  {
    path: 'home-teacher', // Chemin "/home-student"
    component: HomeTeacherComponent // Composant à afficher lorsque le chemin est "/home" (Liste des projet de l'étudiant)
  },
  {
    path: 'register', // Chemin "/register"
    component: RegisterComponent // Composant à afficher lorsque le chemin est "/register" (Page de création de compte)
  },
  {
    path: 'competence', // Chemin "/competence"
    component: CompetenceComponent // Composant à afficher lorsque le chemin est "/competence" (Page de création de compétence)
  },
  {
    path: 'projet', // Chemin "/projet"
    component: ProjetComponent // Composant à afficher lorsque le chemin est "/projet" (Page de création de projet)
  },
  {
    path: 'users', // Chemin "/users"
    component: UserComponent // Composant à afficher lorsque le chemin est "/users" (Page de création d'utilisateur)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes principales de l'application
  exports: [RouterModule] // Exportation du module de routage pour être utilisé dans d'autres modules
})
export class AppRoutingModule { }
