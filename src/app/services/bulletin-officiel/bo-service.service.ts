import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulletinOfficiel } from 'src/app/models/bulletin-officiel';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class BoServiceService {
  
  server = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  // GET
  getBulletinOfficielByNumBO(numBo){
    return this.http.get<BulletinOfficiel>(this.server+`/bo/${numBo}`);
  }

  // POST
  addBo(bulletinOfficiel:BulletinOfficiel){
    return this.http.post<BulletinOfficiel>(this.server+`/bo/new`,bulletinOfficiel).pipe();
  }

  // PUT
  modifieBo(bulletinOfficiel:BulletinOfficiel, numBo:String) {
    console.log("modified !");
    
    return this.http.put(this.server+`/bo/${bulletinOfficiel.numBo}`,bulletinOfficiel);
  }

}
