import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parcelle } from 'src/app/components/homepage/parcelles/parcelles.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ParcelleDataService {

  constructor(private http: HttpClient) { }

  retrieveAllParcelles(){
    return this.http.get<Parcelle[]>(`${API_URL}/admin/parcelles`)
  }

}
