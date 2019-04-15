import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthentificationService } from '../basic_authentification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
   private basicAuthentificationService : BasicAuthentificationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    // let email = 'mahmoud'
    // let password = 'mahmoud'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + password);

    let basicAuthHeaderString = this.basicAuthentificationService.getToken()
    let email = this.basicAuthentificationService.getAuthenticatedUser()

    if (basicAuthHeaderString && email){

    
      request = request.clone({
        setHeaders: {
          Authorization : basicAuthHeaderString
        }
      })
    }
      return next.handle(request);
    
  }


}
