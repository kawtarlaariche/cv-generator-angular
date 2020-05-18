import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { HobbyComponent } from './hobby/hobby.component';
import { LanguageComponent } from './language/language.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import { Cv1Component } from './cv1/cv1.component';


@NgModule({
  declarations: [UserDashboardComponent, PersonalDataComponent, EducationComponent, ExperienceComponent, ProjectComponent, HobbyComponent, LanguageComponent, TemplateComponent, Cv1Component],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,  
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserDashboardModule { }
