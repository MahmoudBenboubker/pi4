import { Component, OnInit } from '@angular/core';
import { ParcelleDataService } from 'src/app/services/data/parcelle-data.service';


export class Parcelle{

  constructor(
      public id: String,
      public text: String,
      public province: String,
      public commune: String,
      public programme: String,
      public sous_proj:String,
      public n_bo_proje: number,
      public date_de_pu:String,
      public  date_de_re:String,
      public  no_parcel:String,
      public  regime_fon:String,
      public  statut_fon:String,
      public  proprietai:String,
      public  cin:String,
      public  join_id:String,
     
  ){}
}

@Component({
  selector: 'app-parcelles',
  templateUrl: './parcelles.component.html',
  styleUrls: ['./parcelles.component.css']
})
export class ParcellesComponent implements OnInit {

  parcelles:  Parcelle[]

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
  }

}
