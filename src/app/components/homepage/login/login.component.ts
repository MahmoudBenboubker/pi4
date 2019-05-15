import { Component, OnInit } from '@angular/core';
import { AuthetificationServiceService } from 'src/app/services/authetification-service.service';
import { BasicAuthentificationService } from 'src/app/services/basic_authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connected : number = 0;
  redirectionPath : string = "/login";
  email ="";
  password = "";
  errorMessage ="La connexion a échoué.\n Veuillez réessayer.";
  invalidLogin=false;
  isLogged=false

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: AuthetificationServiceService,
    private basicAuthenticationService: BasicAuthentificationService
  ) { }

  ngOnInit() {
    
  }

  handleLogin() {
    if(this.hardcodedAuthenticationService.authenticate(this.email, this.password)) {
      this.redirectionPath = "/map";    
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  
  handleBasicAuthLogin() {
   this.basicAuthenticationService.executeAuthentificationService(this.email, this.password)
   .subscribe(
    data => {
      console.log(data)
      this.redirectionPath = "/map";    
      this.invalidLogin = false
    },
    error => {
      this.invalidLogin = true
      console.log(error)
    })
    }

    handleJWTAuthLogin() {
      this.basicAuthenticationService.executeJWTAuthentificationService(this.email, this.password)
      .subscribe(
       data => {
        this.router.navigate(['map']);  
         console.log(data)
         this.invalidLogin = false
       },
       error => {
         this.invalidLogin = true
         console.log(error)
       })
       }
     


}
