import { Component, OnInit } from '@angular/core';
import { AuthetificationServiceService } from 'src/app/services/authetification-service.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardcodedAuthenticationService: AuthetificationServiceService

  ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
