import { Proprietaire } from '../components/homepage/parcelles/parcelles.component';

export class Parcelle {
    id:String
    num_parcelle:String
    regimeFoncier=0
    statutFoncier=0
    listDesProprietaires:Proprietaire[]
}
