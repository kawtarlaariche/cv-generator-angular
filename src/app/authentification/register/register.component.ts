import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/services';
import { CustomValidationService } from '@app/services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error: string;
  constructor(private auth: AuthenticationService,
    private fb: FormBuilder,
    private customValidator: CustomValidationService,
    private router: Router) { }


  get registerFormControl() {
    return this.registerForm.controls;
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPass: ['', [Validators.required]],
    },
      {

        validator: this.customValidator.MatchPassword('password', 'confirmPass'),

      },
    )

  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/authentification/login'])
        },
        err => { this.error = err.error.msg;}
      )
    }

  }

}
