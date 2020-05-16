import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/services';
import { CustomValidationService } from '@app/services';
import { Router } from '@angular/router';
import { UserDashboardComponent } from '@app/user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  error: string;


  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private customValidator: CustomValidationService,
    private router: Router) {

    console.log(this.error)


  }

  get loginFormControl() {
    return this.loginForm.controls;
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    },
    )

    this.loginForm.setValue(this.getTestCredentials())
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/user-dashboard'])
        },
        err => {
          this.error = err.error.msg;
        }
      )
    }

  }

  getTestCredentials() {
    return { email: "kaw94@gmail.com", password: "La123456" }
  }

  redirectToLogin(){
    this.router.navigate(['/authentification/register']);
  }

  
}


