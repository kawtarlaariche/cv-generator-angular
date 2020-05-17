import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Hobby } from '@app/models';
import { UserDashboardService } from '@app/services/user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {

  error;
  hobby:Hobby
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  HobbyForm = new FormGroup({
    description: new FormControl()
  });
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.HobbyForm = this.fb.group({
      credentials: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const creds = this.HobbyForm.controls.credentials as FormArray;
    this.hobby={ 
      description:creds.value[0].description,
      users_id:this.user.id}
      console.log(this.hobby)
      this.dash.createHobby(this.hobby).subscribe(
      res=> {console.log(res)},
      err=> {this.error = err.error.msg})

  }
  delete(i) {
    const creds = this.HobbyForm.controls.credentials as FormArray;
    creds.removeAt(i) 
  }
  reset(i){
    const creds = this.HobbyForm.controls.credentials as FormArray;
    creds.reset(i)
  }
  addCreds() {
    const creds = this.HobbyForm.controls.credentials as FormArray;
    creds.push(this.fb.group({
      description: '',
      
    }));
  }

}
