import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { Province } from 'src/app/models/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceServiceService {

  constructor(private http: HttpClient) { }


  retrieveAllProvinces(){
    return this.http.get<Province[]>(`${API_URL}/provinces`)
  }

}
