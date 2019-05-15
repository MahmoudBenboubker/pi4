import { Component, OnInit } from '@angular/core';
import { ParcelleDataService } from 'src/app/services/data/parcelle-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parcelle',
  templateUrl: './add-parcelle.component.html',
  styleUrls: ['./add-parcelle.component.css']
})
export class AddParcelleComponent implements OnInit {

  id= 15
  num_parcelle = 0
  regimeFoncier = "IMMATRICULE"
  statutFoncier = "Melk"
  proprietaire = new Proprietaire("AA851585","Luis Suarez")
  coordonnees = new Coordonnees(888420)

  listDesProprietaires = new Array<Proprietaire>()
  listDesCoordonnees= new Array<Coordonnees>()

  parcelle = new Parcelle1(this.id, this.num_parcelle, this.regimeFoncier, this.statutFoncier, this.listDesProprietaires, this.listDesCoordonnees);


  constructor(
    private parcelleService: ParcelleDataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ajouterNouvelleParcelle(){
    this.listDesProprietaires.push(this.proprietaire)
    this.listDesCoordonnees.push(this.coordonnees)
      //this.ajoutparcelleService.getParcelle().subscribe();
    this.parcelleService.addParcelle(this.parcelle).subscribe();
    this.router.navigate(['parcelles']);  
  }
}

export class Parcelle1{
 public id:number
 public num_parcelle:number
 public regimeFoncier:string
 public statutFoncier:string
 public listDesProprietaires: Array<Proprietaire> = []
 public listDesCoordonnees : Array<Coordonnees> = []
  constructor (id, num_parcelle, regimeFoncier, statutFoncier, listDesProprietaires, listDesCoordonnees){

    this.id = id
    this.num_parcelle = num_parcelle
    this.regimeFoncier = regimeFoncier
    this.statutFoncier = statutFoncier
    this.listDesProprietaires=listDesProprietaires
    this.listDesCoordonnees = listDesCoordonnees
  }
}


export class Proprietaire{
  public cin:string
  public nomEtPrenom:string

   constructor (cin,nomEtPrenom){
     this.cin = cin
     this.nomEtPrenom = nomEtPrenom
   }

 }

 export class Coordonnees{
  public id
   constructor (id){
     this.id = id   }
 }




