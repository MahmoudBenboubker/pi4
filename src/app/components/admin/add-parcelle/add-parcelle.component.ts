import { Component, OnInit } from '@angular/core';
import { ParcelleDataService } from 'src/app/services/data/parcelle-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parcelle',
  templateUrl: './add-parcelle.component.html',
  styleUrls: ['./add-parcelle.component.css']
})
export class AddParcelleComponent implements OnInit {

  
  idParcelle =0
  cin = ''
  nomPropietaire = ''
  coordonnees = 0

  parcelle = new Parcelle1(this.idParcelle,this.cin, this.nomPropietaire, this.coordonnees );


  constructor(
    private parcelleService: ParcelleDataService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ajouterNouvelleParcelle(){
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

    this.router.navigate(['parcelles']);  
  }
}




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
