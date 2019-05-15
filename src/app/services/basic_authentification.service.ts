import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthentificationService {

  constructor(
    private http: HttpClient
  ) { }

  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('userSession')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('userSession')
    sessionStorage.removeItem('token')
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem('userSession')
     
  }

  
  getToken() {
    if (this.getAuthenticatedUser){
      return sessionStorage.getItem('token')
    }
  }


  /* With Path */
  executeAuthentificationService(email, password) {
   
    let basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + password);
  
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthentificationBean>(`${API_URL}/basicauth`, { headers })
    .pipe(
        map(
          data => {
            sessionStorage.setItem('userSession', email);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
    )
  }

  executeJWTAuthentificationService(username, password) {
   
     

 
    return this.http.post<any>(`${API_URL}/authenticate`,
    { username, password})
    .pipe(
        map(
          data => {
            sessionStorage.setItem('userSession', username);
            sessionStorage.setItem('token', `Bearer ${data.token}`);
            return data;
          }
        )
    )
  }

  

}


export class AuthentificationBean {

  constructor(public message: String) {

  }
}