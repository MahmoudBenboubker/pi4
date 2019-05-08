import { Component, OnInit } from '@angular/core';
import { RechercheBoService } from 'src/app/services/bulletin-officiel/recherche-bo.service';
import { BulletinOfficiel } from 'src/app/models/bulletin-officiel';
import { SuppressionBoService } from 'src/app/services/bulletin-officiel/suppression-bo.service';

@Component({
  selector: 'app-bulletin-officiel',
  templateUrl: './bulletin-officiel.component.html',
  styleUrls: ['./bulletin-officiel.component.css']
})
export class BulletinOfficielComponent implements OnInit {
  
  numBo:String = ''

  allBulletinOfficiels:BulletinOfficiel[] = [];

  constructor(  private rechercheBoService : RechercheBoService,
                private suppressionBoService:SuppressionBoService) { }

  ngOnInit() {
    this.rechercheBoService.getAllBo().subscribe( (data) =>{
      data.forEach( d =>{
        this.allBulletinOfficiels.push(d);
      });
    });
  }

  searchBulletinOfficiel(){
    this.rechercheBoService.getBoByNumBo(this.numBo).subscribe( (data) =>{
      this.allBulletinOfficiels = [];
      this.allBulletinOfficiels.push(data);
    })
  }

  supprimerBo(numBo){
    this.suppressionBoService.deleteBoByNumBo(numBo).subscribe((data)=>{
      window.location.reload();
    });    
  }

  refresh(){
    window.location.reload();
  }

  changeBulletinOfficelReference(bulletinOfficiel){
    console.log("clicked numbo = "+bulletinOfficiel.numBo);
    
    this.numBo = bulletinOfficiel.numBo;
    console.log("new numbo = "+this.numBo);

  }

}
