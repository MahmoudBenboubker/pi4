import { Component, OnInit } from '@angular/core';
import { ProvinceServiceService } from 'src/app/services/data/province/province-service.service';
import { Province } from 'src/app/models/province';

@Component({
  selector: 'province-commune',
  templateUrl: './province-commune.component.html',
  styleUrls: ['./province-commune.component.css']
})
export class ProvinceCommuneComponent implements OnInit {

  provinces:  Province[]

  constructor(
    private provinceService : ProvinceServiceService
  ) { }

  ngOnInit() {

    
    this.provinceService.retrieveAllProvinces().subscribe(
      response => {
          this.provinces = response;
          console.log(response);
      }
    );

  }

}
