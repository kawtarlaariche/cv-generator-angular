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
  experience: Experience
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  ExperienceForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.ExperienceForm = this.fb.group({
      experiences: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }
 
  get experiences(): FormArray {
    return this.ExperienceForm.get('experiences') as FormArray
  }
  addExperience(i: number) {
    this.experience = {
      dateDebut: this.experiences.value[i].dateDebut,
      dateFin: this.experiences.value[i].dateFin,
      company: this.experiences.value[0].company,
      title: this.experiences.value[0].company,
      description: this.experiences.value[i].description,
      users_id: this.user.id
    }
    console.log(this.experiences.value[i]);
    this.dash.createExperience(this.experience).subscribe(
      res => { console.log(res) },
      err => { this.error = err.error.msg })
  }
  delete(i) {
    this.experiences.removeAt(i)
  }
  reset(i) {
    this.experiences.reset(i)
  }
  addCreds() {
    this.experiences.push(this.fb.group({
      dateDebut: '',
      dateFin: '',
      company: '',
      title: '',
      description: ''
    }));
  }

}
