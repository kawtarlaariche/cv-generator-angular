import { Component, OnInit } from '@angular/core';
import { Language } from '@app/models';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { UserDashboardService } from '@app/services/user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  language;
  error;
  
  user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
  levels: string[] = [
    'native speaker',
    'fluent',
    'highly proficient in spoken and written',
    'very good command',
    'good working knowledge',
    'basic communication skills']

  LanguageForm : FormGroup;
  constructor(
    private fb: FormBuilder,
    private dash: UserDashboardService,
    private router: Router) {
    this.LanguageForm = this.fb.group({
      languages: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

   addLanguage(i:number){
    this.language = {
      name: this.languages.value[i].name,
      level: this.languages.value[i].level,
      users_id: this.user.id}
    console.log(this.languages.value[i]);
     this.dash.createLanguage(this.language).subscribe(
      res=> {console.log(res)},
      err=> {this.error = err.error.msg})
   }
  
  delete(i) {
    this.languages.removeAt(i)
  }
  reset(i) {
   
    this.languages.reset(i)
  }
  get languages() : FormArray {
    return this.LanguageForm.get("languages") as FormArray;
  }
  addCreds() {    
    this.languages.push(this.fb.group({
      name: '',
      level: ''
    }));
  }

}
