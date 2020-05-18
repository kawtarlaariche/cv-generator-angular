import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { UserDashboardService } from '@app/services/user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  error;
  project:Project
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  ProjectForm :FormGroup
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.ProjectForm = this.fb.group({
      projects: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const creds = this.ProjectForm.controls.credentials as FormArray;
    this.project={ 
      dateDebut:creds.value[0].dateDebut,
      dateFin:creds.value[0].dateFin,
      description:creds.value[0].description,
      users_id:this.user.id}
      console.log(this.project)
      this.dash.createProject(this.project).subscribe(
      res=> {console.log(res)},
      err=> {this.error = err.error.msg})

  }
  addProject(i: number) {
    this.project = {
      dateDebut: this.projects.value[i].dateDebut,
      dateFin: this.projects.value[i].dateFin,
      description:this.projects.value[i].description,
      users_id: this.user.id
    }
    console.log(this.projects.value[i]);
    this.dash.createProject(this.project).subscribe(
      res => { console.log(res) },
      err => { this.error = err.error.msg })
  }
  get projects():FormArray{
    return this.ProjectForm.get('projects') as FormArray
  }
  delete(i) {
    this.projects.removeAt(i) 
  }
  reset(i){
    this.projects.reset(i)
  }
  addCreds() {
    this.projects.push(this.fb.group({
      dateDebut: '',
      dateFin: '',
      description:''
    }));
  }

}
