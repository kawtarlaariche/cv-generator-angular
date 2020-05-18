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
  education: Education
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  EducationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.EducationForm = this.fb.group({
      educations: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const creds = this.EducationForm.controls.credentials as FormArray;
    this.education = {
      dateDebut: creds.value[0].dateDebut,
      dateFin: creds.value[0].dateFin,
      description: creds.value[0].description,
      users_id: this.user.id
    }
    console.log(this.education)
    this.dash.createEducation(this.education).subscribe(
      res => { console.log(res) },
      err => { this.error = err.error.msg })

  }
  get educations(): FormArray {
    return this.EducationForm.get("educations") as FormArray;
  }
  delete(i) {
    this.educations.removeAt(i)
  }
  reset(i) {
    this.educations.reset(i)
  }
  addEducation(i: number) {
    this.education = {
      dateDebut: this.educations.value[i].dateDebut,
      dateFin: this.educations.value[i].dateFin,
      description:this.educations.value[i].description,
      users_id: this.user.id
    }
    console.log(this.educations.value[i]);
    this.dash.createEducation(this.education).subscribe(
      res => { console.log(res) },
      err => { this.error = err.error.msg })
  }
  addCreds() {
    this.educations.push(this.fb.group({
      dateDebut: '',
      dateFin: '',
      description: ''
    }));
  }
}
