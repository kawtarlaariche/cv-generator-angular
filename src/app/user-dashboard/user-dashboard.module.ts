import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { HobbyComponent } from './hobby/hobby.component';
import { LanguageComponent } from './language/language.component';


@NgModule({
  declarations: [UserDashboardComponent, PersonalDataComponent, ProfileComponent, EducationComponent, ExperienceComponent, ProjectComponent, HobbyComponent, LanguageComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
