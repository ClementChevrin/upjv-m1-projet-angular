import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CompetenceComponent } from './competence/competence.component';
import { ProjetComponent } from './projet/projet.component';
import { UserComponent } from './user/user.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HomeStudentNewprojComponent } from './home-student-newproj/home-student-newproj.component';
import { HomeTeacherNewprojComponent } from './home-teacher-newproj/home-teacher-newproj.component';
import { HomeTeacherNoteprojComponent } from './home-teacher-noteproj/home-teacher-noteproj.component';
import { HomeStudentNoteprojComponent } from './home-student-noteproj/home-student-noteproj.component';
import { HomeTeacherProjetsComponent } from './home-teacher-projets/home-teacher-projets.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CompetenceComponent,
    ProjetComponent,
    UserComponent,
    HomeStudentComponent,
    HomeTeacherComponent,
    HomeStudentNewprojComponent,
    HomeTeacherNewprojComponent,
    HomeTeacherNoteprojComponent,
    HomeStudentNoteprojComponent,
    HomeTeacherProjetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
