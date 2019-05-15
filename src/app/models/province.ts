import { Commune } from './commune';

export class Province {

    public id:number
    public numProvince:string
    public nomProvince:string
    public communes: Commune[]
  
     constructor (id, numProvince, nomProvince, communes){
       this.id = id
       this.numProvince = numProvince
       this.nomProvince = nomProvince
       this.communes=communes
     }
  
}
