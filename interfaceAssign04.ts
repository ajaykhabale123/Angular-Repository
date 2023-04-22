abstract class Car {
   
    Wheel () : string {
        return '4 wheeler';
    }

    
    checkAC() : string {
        return 'AC is Available';
    }
    callFaciltiy() : string {
        return 'Call facility supported';
    }
    abstract Price (): number ;
    abstract getTotalSeats (): number;
    abstract color(): string;
    

}

class Toyota extends Car {
    
    Price(): number {
       return 1000000;
    }
    getTotalSeats(): number {
       return 5;
    }
    color(): string {
       return "White" ;
    }

}

class Hyundai extends Car {
    
    Price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 7 ;
    }
    color(): string {
        return 'Gray' ;
    }   
}

interface ICar {
    GPS(): string ;
}

class hyundai implements ICar {
    GPS(): string {
       return "Hyundai ==> GPS is Supported"
    }

}

class toyota implements ICar {
    GPS(): string {
        return "Toyota ==> GPS is Not Supported"
    }

}

let objHyundai = new hyundai()
console.log(objHyundai.GPS());

let objToyota = new toyota()
console.log(objToyota.GPS());