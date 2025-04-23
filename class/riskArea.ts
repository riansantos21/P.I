export class riskArea{
    private id_riskArea:number
    private name:string
    private description:string

    constructor(id_riskArea:number,nameConst:string,descriptionConst:string){
        this.id_riskArea = id_riskArea
        this.name = nameConst
        this.description = descriptionConst
    }

    setID_riskArea(id_riskArea:number):void{
        this.id_riskArea = id_riskArea
    }
    setName(nameConst:string):void{ 
    this.name = nameConst
    }
    setDescription(nameConst:string):void{
        this.name = nameConst
    }

    getId_riskArea():number{
        return this.id_riskArea
    }
    getName():string{
        return this.name
    }
    getDescription():string{
        return this.description
    }

}


