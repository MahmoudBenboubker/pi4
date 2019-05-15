import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean{
    constructor(public message:string ){      
    }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworld_bean`)
  }



/* With Path */
executeHelloWorldBeanServiceWithPath(name){
    // let basicAuthHeaderString = this.createBasicAuthentificationHttpHeader()
    // let headers = new HttpHeaders({
    //       Authorization: basicAuthHeaderString
    //   })
    return this.http.get<HelloWorldBean>(`${API_URL}/helloworld_bean/path_variable/${name}`)

  }

  // createBasicAuthentificationHttpHeader(){
  //   let email = 'mahmoud'
  //   let password = 'mahmoud'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + password);
  //       return basicAuthHeaderString;
  // }
}
