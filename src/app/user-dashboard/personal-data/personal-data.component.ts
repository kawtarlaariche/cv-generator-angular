import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  PersonalDataForm: FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
}
