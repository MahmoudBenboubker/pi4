import { Component, OnInit } from '@angular/core';
import { BulletinOfficiel } from 'src/app/models/bulletin-officiel';
import { BoServiceService } from 'src/app/services/bulletin-officiel/bo-service.service';
// To catch url params
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-modifie-bulletin-officiel',
  templateUrl: './modifie-bulletin-officiel.component.html',
  styleUrls: ['./modifie-bulletin-officiel.component.css']
})
export class ModifieBulletinOfficielComponent implements OnInit {

  // Pour afficher le message de succès
  modifie=0

  numBo:String
  datePublication:Date
  dateRecuperation:Date

  bulletinofficiel = new BulletinOfficiel(this.numBo,this.datePublication,this.dateRecuperation)

  constructor( private boServiceService:BoServiceService,
               private route: ActivatedRoute) { }


  ngOnInit() {
    this.numBo = this.route.snapshot.paramMap.get("numBo");
    if(this.numBo != null){
      this.getBulletinOfficielDetails();
    }    
  }

  // GET To Modifie  
  getBulletinOfficielDetails(){
    this.boServiceService.getBulletinOfficielByNumBO(this.numBo).subscribe( data =>{
      this.bulletinofficiel.numBo = data.numBo;
      this.bulletinofficiel.datePublication = data.datePublication;
      this.bulletinofficiel.dateRecuperation = data.dateRecuperation;
    });   
  }

  // PUT modification
  applyModification(){      
    if(this.boServiceService.modifieBo(this.bulletinofficiel,this.numBo).subscribe()){
      this.modifie =1;
    }
  }
}
