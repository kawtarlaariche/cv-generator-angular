import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  submitted = false;
 user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
 
  PersonalDataForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    nationality: new FormControl(),
    mobile: new FormControl(),
    placeOfBirth: new FormControl(),
    dateOfBirth: new FormControl(),
    profile: new FormControl(),
  });
  getData() {
    return {
      firstname: this.user.firstname,
      lastname:  this.user.lastname,
      email: this.user.email,
      adress: null,
      nationality: null,
      mobile: null,
      placeOfBirth: null,
      dateOfBirth: null,
      profile: null,
    }
  }
  get DataFormControl() {
    return this.PersonalDataForm.controls;
  }
  constructor() { }

  ngOnInit(): void {
  this.PersonalDataForm.setValue(this.getData())
  }
  onSubmit() {

  }
}
