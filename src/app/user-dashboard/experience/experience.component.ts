import { Component, OnInit } from '@angular/core';
import { Experience } from '@app/models';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { UserDashboardService } from '@app/services/user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  error;
  experience:Experience
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  ExperienceForm = new FormGroup({
    dateDebut: new FormControl(),
    dateFin: new FormControl(),
    description: new FormControl()
  });
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.ExperienceForm = this.fb.group({
      credentials: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const creds = this.ExperienceForm.controls.credentials as FormArray;
    this.experience={ 
      dateDebut:creds.value[0].dateDebut,
      dateFin:creds.value[0].dateFin,
      description:creds.value[0].description,
      users_id:this.user.id}
      console.log(this.experience)
      this.dash.createExperience(this.experience).subscribe(
      res=> {console.log(res)},
      err=> {this.error = err.error.msg})

  }
  delete(i) {
    const creds = this.ExperienceForm.controls.credentials as FormArray;
    creds.removeAt(i) 
  }
  reset(i){
    const creds = this.ExperienceForm.controls.credentials as FormArray;
    creds.reset(i)
  }
  addCreds() {
    const creds = this.ExperienceForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      dateDebut: '',
      dateFin: '',
      description:''
    }));
  }

}
