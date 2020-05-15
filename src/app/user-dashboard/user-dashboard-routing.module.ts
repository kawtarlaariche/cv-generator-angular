import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { HobbyComponent } from './hobby/hobby.component';
import { LanguageComponent } from './language/language.component';

const routes: Routes = [{
  path: '', component: UserDashboardComponent,
  children: [
    { path: 'personalData', component: PersonalDataComponent },
    { path: 'education', component: EducationComponent },
    {path: 'experience', component:ExperienceComponent},
    {path:'project', component:ProjectComponent},
    {path:'language',component:LanguageComponent},
    {path:'hobby', component:HobbyComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
