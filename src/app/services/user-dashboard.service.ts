import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, Education, Experience, Project, Language, Hobby } from '@app/models';


const apiUrl = environment.baseApi;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  constructor(private http: HttpClient) { }
 
  updateUser(id:Number,user: User):Observable<any>{
    return this.http.put(apiUrl + '/user/' +id, user,httpOptions).pipe(
      catchError(this.errorHandler));
  }
  
 createEducation(education:Education){
   return this.http.post(apiUrl+'/education',education,httpOptions).pipe(
    catchError(this.errorHandler));
 }
 createExperience(experience:Experience){
  return this.http.post(apiUrl+'/experience',experience,httpOptions).pipe(
   catchError(this.errorHandler));
}
createProject(project:Project){
  return this.http.post(apiUrl+'/project',project,httpOptions).pipe(
   catchError(this.errorHandler));
}
createLanguage(language:Language){
  return this.http.post(apiUrl+'/language',language,httpOptions).pipe(
   catchError(this.errorHandler));
}
createHobby(hobby:Hobby){
  return this.http.post(apiUrl+'/hobby',hobby,httpOptions).pipe(
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
