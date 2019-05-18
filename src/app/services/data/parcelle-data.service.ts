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

<<<<<<< HEAD
 /* retrieveAllParcelles(){
    return this.http.get<Parcelle[]>(`${API_URL}/admin/parcelles`)
  } */

=======
>>>>>>> e45ff5a20ab7010dfb79543ea4e0e95ec139c2cf
  retrieveAllParcelles(){
    return this.http.get<Parcelle[]>(`${API_URL}/parcelles`)
  }

  retrieveParcelle(id){
    return this.http.get<Parcelle>(`${API_URL}/parcelle/${id}`)
  }

<<<<<<< HEAD
    
  addParcelle(p:Parcelle1) {
    console.log("adding...");    
    return this.http.post<Parcelle1>(`${API_URL}/saveParcelle/${p.idParcelle}/${p.cin}/${p.nomPropietaire}/${p.coordonnees}`, p).pipe();
=======
  addParcelle(p:Parcelle1) {
    
    return this.http.post<Parcelle1>(`${API_URL}/parcelle`, p);
  }
    /*
  addParcelle(p:Parcelle1) {
    
    return this.http.post<Parcelle1>(`${API_URL}/parcelle/${p.idParcelle}/${p.cin}/${p.nomPropietaire}/${p.coordonnees}`, p).pipe();
  }*/

    deleteParcelle(id){
   
    return this.http.delete(`${API_URL}/parcelle/${id}`);
>>>>>>> e45ff5a20ab7010dfb79543ea4e0e95ec139c2cf
  }


}
