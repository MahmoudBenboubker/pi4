import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/data/welcome-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   
  message = "Some Message";
  welcomeMessageFromService: string;
  name = 'Mahmoud';

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService
     ) 
  {
     
  }

  ngOnInit() {
  }

  getWelcomeMessage(){

  //console.log(this.service.executeHelloWorldBeanService.subscribe());
      this.service.executeHelloWorldBeanService().subscribe(
           response => this.handleSuccessfulResponse(response)
      );
    }

  handleSuccessfulResponse(response){
     this.welcomeMessageFromService=response.message;
  }

  getWelcomeMessageWithParameter(){

    //console.log(this.service.executeHelloWorldBeanService.subscribe());
        this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
             response => this.handleSuccessfulResponse(response)
        );
      }
}