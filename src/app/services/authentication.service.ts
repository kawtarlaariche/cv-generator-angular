import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  login(user: User) {
    return this.http.post(apiUrl + '/login',
      {
        email: user.email,
        password: user.password
      })
      .pipe(
        map(res => {
          let token = res['token'];
          localStorage.setItem('token', token);
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
  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client-side error
    } else {
      // server-side error
    }
    return throwError(error);
  }

}
