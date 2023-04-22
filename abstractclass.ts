abstract class Car {
    // simple Method
    Wheel () : string {
        return '4 wheeler';
    }

    // non abstract method
    checkAC() : string {
        return 'AC is Available';
    }
    callFaciltiy() : string {
        return 'Call facility supported';
    }

    // abstract method
    abstract Price (): number ;
    abstract gettotalSeats (): number;
    abstract color(): string;

}

class Hyundai extends Car {
    Price(): number {
        return 90000000;
    }
    gettotalSeats(): number {
        return 5 ;
    }
    color(): string {
        return 'Gray' ;
    }
    
}

let hyundai = new Hyundai ();

console.log("AC avialbale - ", hyundai.checkAC());
console.log("Price -", hyundai.Price());


class Tata extends Car {
    Price(): number {
        return 85000000;
    }
    gettotalSeats(): number {
        return 6 ;
    }
    color(): string {
        return 'Black' ;
    }

}

let tata = new Tata ();
console.log("Call Facility - ", tata.callFaciltiy());


