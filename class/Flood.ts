export class Flood {
    private name: string;
    private date: Date;

    constructor(
        name: string, 
        date: Date      
) {
        this.name = name;
        this.date = date;
    }

    setName(name: string): void {this.name = name; 
    };
    setDate(date: Date): void {this.date = date; 
    };

    getName(): string {return this.name; 
    };
    getDate(): Date {return this.date; 
    };
}
