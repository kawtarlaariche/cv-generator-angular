import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, Education, Experience, Project, Language, Hobby } from '@app/models';
import { UrlResolver } from '@angular/compiler';
import { UserDashboardService } from './user-dashboard.service';

const apiUrl = environment.baseApi;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataCvService {

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get(apiUrl + '/users/' + id, httpOptions).pipe(
      map(res => res as User),
      catchError(this.errorHandler))
  }

  getEducationsByUserID(user: User):Observable<Education[]>{
    return this.http.post(apiUrl + '/educations/usersEducations', { users_id: user.id }, httpOptions).pipe(
      map(res => res as Education[]),
      catchError(this.errorHandler));
  }

  getExperiencesByUserID(user: User):Observable<Experience[]>{
    return this.http.post(apiUrl + '/experiences/usersExperiences', { users_id: user.id }, httpOptions).pipe(
      map(res => res as Experience[]),
      catchError(this.errorHandler));
  }

  getProjectsByUserID(user: User):Observable<Project[]>{
    return this.http.post(apiUrl + '/projects/usersProjects', { users_id: user.id }, httpOptions).pipe(
      map(res => res as Project[]),
      catchError(this.errorHandler));
  }

  getLanguagesByUserID(user: User):Observable<Language[]>{
    return this.http.post(apiUrl + '/languages/usersLanguages', { users_id: user.id }, httpOptions).pipe(
      map(res => res as Language[]),
      catchError(this.errorHandler));
  }

  getHobbiesByUserID(user: User):Observable<Hobby[]>{
    return this.http.post(apiUrl + '/Hobbies/usersHobbies', { users_id: user.id }, httpOptions).pipe(
      map(res => res as Hobby[]),
      catchError(this.errorHandler));
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
