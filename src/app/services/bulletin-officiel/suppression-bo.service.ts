import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SuppressionBoService {

  server = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  deleteBoByNumBo(numBo){
    return this.http.delete(this.server+`/bo/${numBo}`);
  }
}
