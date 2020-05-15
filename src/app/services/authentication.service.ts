import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '@app/models';


const apiUrl = environment.baseApi + '/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private http: HttpClient) { }

  test: any;

  login(user: User) {
    return this.http.post(apiUrl + '/login',
      {
        email: user.email,
        password: user.password
      })
      .pipe(
        map(res => {
          let token = res['token'];
           let expTime =res['EXPIRY_TIME'];
          localStorage.setItem('token', token);
          localStorage.setItem('expTime',expTime);
        }),
        catchError(this.errorHandler)
      )
  }

  register(user: User) {
    return this.http.post(apiUrl + '/register',
      {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
      })
      .pipe(catchError(this.errorHandler));
  }

  getUser(email: string){
   return this.http.post(apiUrl + '/user',{
     email:email
   })
   .subscribe(
     res => {this.test = res},
     err => {}
   )
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client-side error
    } else {
      // server-side error
    }
    return throwError(error);
  }



}
