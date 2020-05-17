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
  ProjectForm = new FormGroup({
    dateDebut: new FormControl(),
    dateFin: new FormControl(),
    description: new FormControl()
  });
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.ProjectForm = this.fb.group({
      credentials: this.fb.array([]),
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
  delete(i) {
    const creds = this.ProjectForm.controls.credentials as FormArray;
    creds.removeAt(i) 
  }
  reset(i){
    const creds = this.ProjectForm.controls.credentials as FormArray;
    creds.reset(i)
  }
  addCreds() {
    const creds = this.ProjectForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      dateDebut: '',
      dateFin: '',
      description:''
    }));
  }

}
