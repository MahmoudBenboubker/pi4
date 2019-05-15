import { GeoJsonObject } from 'geojson';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
@Injectable({
  providedIn: 'root'
})
export class CoordonneeDataService {
  constructor(private http: HttpClient) {}

  retrieveAllCoordonnees() {
    return this.http.get<GeoJsonObject>(`${API_URL}/coordonnees`);
  }
}
