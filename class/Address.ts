export class Address {
    private zipCode: string;
    private number: number;
    private neighborhood: string;
    private latitude: string;
    private longitude: string;
    private city: string;
    private complement: string;
    private street: string;
    private normalRiverHeight: string;

    constructor(
        zipCode: string,
        number: number,
        neighborhood: string,
        latitude: string,
        longitude: string,
        city: string,
        complement: string,
        street: string,
        normalRiverHeight: string
    ) {
        this.zipCode = zipCode;
        this.number = number;
        this.neighborhood = neighborhood;
        this.latitude = latitude;
        this.longitude = longitude;
        this.city = city;
        this.complement = complement;
        this.street = street;
        this.normalRiverHeight = normalRiverHeight;
    }

    setZipCode(zipCode: string): void {this.zipCode = zipCode; 
    };
    setNumber(number: number): void {this.number = number; 
    };
    setNeighborhood(neighborhood: string): void {this.neighborhood = neighborhood; 
    };
    setLatitude(latitude: string): void {this.latitude = latitude; 
    };
    setLongitude(longitude: string): void {this.longitude = longitude; 
    };
    setCity(city: string): void {this.city = city; 
    };
    setComplement(complement: string): void {this.complement = complement; 
    };
    setStreet(street: string): void {this.street = street; 
    };
    setNormalRiverHeight(normalRiverHeight: string): void {this.normalRiverHeight = normalRiverHeight; 
    };

    getZipCode(): string {return this.zipCode; 
    };
    getNumber(): number {return this.number;
    };
    getNeighborhood(): string {return this.neighborhood; 
    };
    getLatitude(): string {return this.latitude; 
    };
    getLongitude(): string {return this.longitude; 
    };
    getCity(): string {return this.city; 
    };
    getComplement(): string {return this.complement; 
    };
    getStreet(): string {return this.street; 
    };
    getNormalRiverHeight(): string {return this.normalRiverHeight; 
    };
}
