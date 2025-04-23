export class riskArea{
    private name:string;
    private description:string;

    constructor(nameConst:string,descriptionConst:string){
        this.name = nameConst
        this.description = descriptionConst
    };

    setName(nameConst:string):void{ 
    this.name = nameConst
    };
    setDescription(nameConst:string):void{
        this.name = nameConst
    };
    getName():string{
        return this.name
    };
    getDescription():string{
        return this.description
    };

}
