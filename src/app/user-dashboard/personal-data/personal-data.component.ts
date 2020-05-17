import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDashboardService } from '@app/services/user-dashboard.service';
import { Router } from '@angular/router';
import { User } from '@app/models';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  error;
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  
  PersonalDataForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    nationality: new FormControl(),
    phone: new FormControl(),
    placeOfBirth: new FormControl(),
    dateOfBirth: new FormControl(),
    profile: new FormControl(),
  });
  getData() {
    return {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      email: this.user.email,
      address: null,
      nationality: null,
      phone: null,
      placeOfBirth: null,
      dateOfBirth: null,
      profile: null,
    }
  }
  get DataFormControl() {
    return this.PersonalDataForm.controls;
  }
  constructor(
              private dash: UserDashboardService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.PersonalDataForm.setValue(this.getData())
  }
  onSubmit() {
     console.log(this.user.id)
    this.dash.updateUser(this.user.id,this.PersonalDataForm.value).subscribe(
      res=> {console.log(res)},
      err=> {this.error = err.error.msg}
    )
  }
  redirect(){
    this.router.navigate(['/user-dashboard/education']);
  }

}
