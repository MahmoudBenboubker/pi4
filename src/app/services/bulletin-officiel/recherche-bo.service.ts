import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BulletinOfficiel } from 'src/app/models/bulletin-officiel';


@Injectable({
  providedIn: 'root'
})
export class RechercheBoService {

  server = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getAllBo(){
    return this.http.get<BulletinOfficiel[]>(this.server+`/bo`);
  }

  getBoByNumBo(numBo){
    return this.http.get<BulletinOfficiel>(this.server+`/bo/${numBo}`);
  }
}
