

export class BulletinOfficiel {

    numBo:String
    datePublication:Date
    dateRecuperation:Date

    constructor(numBo:String,datePublication:Date,dateRecuperation:Date){
        this.numBo=numBo;
        this.datePublication=datePublication;
        this.dateRecuperation=dateRecuperation;
    }
}
