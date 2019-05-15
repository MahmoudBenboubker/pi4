import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthetificationServiceService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
      if(username==="mahmoud@benboubker.com" && password === 'mahmoud') {
      sessionStorage.setItem('userSession', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userSession')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('userSession')
  }


}
