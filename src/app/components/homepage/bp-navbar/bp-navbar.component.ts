import { Component, OnInit } from '@angular/core';
import { AuthetificationServiceService } from 'src/app/services/authetification-service.service';

@Component({
  selector: 'bp-navbar',
  templateUrl: './bp-navbar.component.html',
  styleUrls: ['./bp-navbar.component.css']
})
export class BpNavbarComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(
    private hardcodedAuthenticationService 
    : AuthetificationServiceService
  ) { }

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();

  }

}
