import { Component, OnInit } from '@angular/core';
import { ParcelleDataService } from 'src/app/services/data/parcelle-data.service';


export class Parcelle{

   constructor(
    public id: String,
    public num_parcelle: String,
    public regimeFoncier: String,
    public statutFoncier: String,
    public listDesProprietaires : Proprietaire[]
   
){}

}


export class Proprietaire{
 
   constructor(
     public cin: String,
     public nomEtPrenom: String,
    
 ){}
 
 }

@Component({
  selector: 'app-parcelles',
  templateUrl: './parcelles.component.html',
  styleUrls: ['./parcelles.component.css']
})
export class ParcellesComponent implements OnInit {

  parcelles:  Parcelle[]
  parcelle: Parcelle
  idParcelle: ""

  constructor(
    private parcelleService: ParcelleDataService
  ) { }

  ngOnInit() {

    this.parcelleService.retrieveAllParcelles().subscribe(
      response => {
          this.parcelles = response;
          console.log(response);
      }
    );

    /**/
  }

  searchParcelle(){
    
    if (this.idParcelle){
      this.parcelles = null
      this.parcelleService.retrieveParcelle(this.idParcelle).subscribe(
        response => {
            this.parcelle = response;
            console.log(response);
        }
      );
    }

    else {
      this.parcelle= null
      this.parcelleService.retrieveAllParcelles().subscribe(
        response => {
            this.parcelles = response;
            console.log(response);
        }
      );
    }

  }
  

}
