import { Component, OnInit } from '@angular/core';
import { ParcelleDataService } from 'src/app/services/data/parcelle-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parcelle',
  templateUrl: './add-parcelle.component.html',
  styleUrls: ['./add-parcelle.component.css']
})
export class AddParcelleComponent implements OnInit {

<<<<<<< HEAD
  
  idParcelle =0
  cin = ''
  nomPropietaire = ''
  coordonnees = 0

  parcelle = new Parcelle1(this.idParcelle,this.cin, this.nomPropietaire, this.coordonnees );
=======
  id= 15
  num_parcelle = 0
  regimeFoncier = "IMMATRICULE"
  statutFoncier = "Melk"
  proprietaire = new Proprietaire("AA851585","Luis Suarez")
  coordonnees = new Coordonnees(888420)

  listDesProprietaires = new Array<Proprietaire>()
  listDesCoordonnees= new Array<Coordonnees>()

  parcelle = new Parcelle1(this.id, this.num_parcelle, this.regimeFoncier, this.statutFoncier, this.listDesProprietaires, this.listDesCoordonnees);
>>>>>>> e45ff5a20ab7010dfb79543ea4e0e95ec139c2cf


  constructor(
    private parcelleService: ParcelleDataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ajouterNouvelleParcelle(){
<<<<<<< HEAD
    console.log("clicked");
   
    this.parcelle.idParcelle = this.idParcelle;
    this.parcelle.cin = this.cin;
    this.parcelle.nomPropietaire = this.nomPropietaire;
    this.parcelle.coordonnees = this.coordonnees;

    console.log("idParcelle = " + this.parcelle.idParcelle);
    console.log("cin = " + this.parcelle.cin);
    console.log("nomPropietaire = " + this.parcelle.nomPropietaire);
    console.log("coordonnees = " + this.parcelle.coordonnees);
    
    //this.ajoutparcelleService.getParcelle().subscribe();
    this.parcelleService.addParcelle(this.parcelle).subscribe();

=======
    this.listDesProprietaires.push(this.proprietaire)
    this.listDesCoordonnees.push(this.coordonnees)
      //this.ajoutparcelleService.getParcelle().subscribe();
    this.parcelleService.addParcelle(this.parcelle).subscribe();
>>>>>>> e45ff5a20ab7010dfb79543ea4e0e95ec139c2cf
    this.router.navigate(['parcelles']);  
  }
}

<<<<<<< HEAD



export class Parcelle1{
  idParcelle:number
  cin:string
  nomPropietaire:string
  coordonnees:number

  constructor (idParcelle,cin, nomPropietaire, coordonnees ){
    this.idParcelle = idParcelle
    this.cin = cin
    this.nomPropietaire = nomPropietaire
    this.coordonnees = coordonnees
  }
}
=======
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




>>>>>>> e45ff5a20ab7010dfb79543ea4e0e95ec139c2cf
