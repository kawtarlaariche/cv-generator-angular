import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { UserDashboardService } from '@app/services/user-dashboard.service';
import { Router } from '@angular/router';
import { Education } from '@app/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  error;
  education:Education
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  EducationForm = new FormGroup({
    dateDebut: new FormControl(),
    dateFin: new FormControl(),
    description: new FormControl()
  });
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.EducationForm = this.fb.group({
      credentials: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const creds = this.EducationForm.controls.credentials as FormArray;
    this.education={ 
      dateDebut:creds.value[0].dateDebut,
      dateFin:creds.value[0].dateFin,
      description:creds.value[0].description,
      users_id:this.user.id}
      console.log(this.education)
      this.dash.createEducation(this.education).subscribe(
      res=> {console.log(res)},
      err=> {this.error = err.error.msg})

  }
  delete(i) {
    const creds = this.EducationForm.controls.credentials as FormArray;
    creds.removeAt(i) 
  }
  reset(i){
    const creds = this.EducationForm.controls.credentials as FormArray;
    creds.reset(i)
  }
  addCreds() {
    const creds = this.EducationForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      dateDebut: '',
      dateFin: '',
      description:''
    }));
  }
}
