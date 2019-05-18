import { Component, OnInit } from '@angular/core';
import { BulletinOfficiel } from 'src/app/models/bulletin-officiel';
import { BoServiceService } from 'src/app/services/bulletin-officiel/bo-service.service';
import { Parcelle } from 'src/app/models/parcelle';

// To catch url params
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-bulletin-officiel',
  templateUrl: './add-bulletin-officiel.component.html',
  styleUrls: ['./add-bulletin-officiel.component.css']
})
export class AddBulletinOfficielComponent implements OnInit {

  // Pour afficher le message de succès
  cree =0

  numBo:String
  datePublication:Date
  dateRecuperation:Date 
  listeDesParcelles:Parcelle[] = []

  bulletinofficiel = new BulletinOfficiel(this.numBo,this.datePublication,this.dateRecuperation)

  
  constructor( private boServiceService:BoServiceService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    this.numBo = this.route.snapshot.paramMap.get("numBo");
    console.log("num BO = "+this.numBo);
    if(this.numBo != null){
      this.getBulletinOfficielDetails();
    }    
  }

  // GET To Modifie  
  getBulletinOfficielDetails(){
    this.boServiceService.getBulletinOfficielByNumBO(this.numBo).subscribe( data =>{
      console.log("Successfuly GET !");
      this.bulletinofficiel.numBo = data.numBo;
      this.bulletinofficiel.datePublication = data.datePublication;
      this.bulletinofficiel.dateRecuperation = data.dateRecuperation;
    });   
  }

  // POST
  ajouterNouveauBO(){
<<<<<<< HEAD
    console.log(this.bulletinofficiel);
    
=======
>>>>>>> e45ff5a20ab7010dfb79543ea4e0e95ec139c2cf
    if(this.boServiceService.addBo(this.bulletinofficiel).subscribe()){
      this.cree=1;
    }
  }

  // PUT
  modifieBo(numBo){

  }
}
