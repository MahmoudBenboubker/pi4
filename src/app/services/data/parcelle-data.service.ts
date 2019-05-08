import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parcelle } from 'src/app/components/homepage/parcelles/parcelles.component';
import { API_URL } from 'src/app/app.constants';
import { Parcelle1 } from 'src/app/components/admin/add-parcelle/add-parcelle.component';

@Injectable({
  providedIn: 'root'
})
export class ParcelleDataService {

  constructor(private http: HttpClient) { }

 /* retrieveAllParcelles(){
    return this.http.get<Parcelle[]>(`${API_URL}/admin/parcelles`)
  } */

  retrieveAllParcelles(){
    return this.http.get<Parcelle[]>(`${API_URL}/parcelles`)
  }

  retrieveParcelle(id){
    return this.http.get<Parcelle>(`${API_URL}/parcelle/${id}`)
  }

    
  addParcelle(p:Parcelle1) {
    console.log("adding...");    
    return this.http.post<Parcelle1>(`${API_URL}/saveParcelle/${p.idParcelle}/${p.cin}/${p.nomPropietaire}/${p.coordonnees}`, p).pipe();
  }


}
