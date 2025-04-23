export class Flood {
    private id_flood:number
    private name: string;
    private date: Date;

    constructor(
        id_flood:number,
        name:string,
        date:Date      
) {
        this.id_flood = id_flood;
        this.name = name;
        this.date = date;
    }

    setId_Flood(id_flood:number):void{this.id_flood = id_flood
    };
    setName(name: string): void {this.name = name; 
    };
    setDate(date: Date): void {this.date = date; 
    };

    getId_Flood():number{return this.id_flood
    };
    getName(): string {return this.name; 
    };
    getDate(): Date {return this.date; 
    };
}
