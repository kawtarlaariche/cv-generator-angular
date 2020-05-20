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
  HobbyForm : FormGroup
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.HobbyForm = this.fb.group({
      hobbies: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }
  
  get hobbies():FormArray{
    return this.HobbyForm.get('hobbies') as FormArray;
  }
  addHobby(i:number){
    this.hobby = {
      description: this.hobbies.value[i].description,
      users_id: this.user.id}
      console.log(this.user.id)
      console.log(this.hobby)
  
     this.dash.createHobby(this.hobby).subscribe(
      res=> {console.log(res)},
      err=> {this.error = err.error.msg})
   }
  
  delete(i) {
    this.hobbies.removeAt(i) 
  }
  reset(i){
    this.hobbies.reset(i)
  }
  addCreds() {
    this.hobbies.push(this.fb.group({
      description: '',
      
    }));
  }

}
