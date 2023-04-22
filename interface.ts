interface IProduct {
    id : number ;
    name : string;
    description : string;
    price : number;

    display(): number; // only declaration
}

class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    display(): number {
        throw new Error("Method not implemented.");
    }
}



interface IPrint {
    print () : void; // only declaration

}

class Excel implements IPrint {
    print(): void {
        console.log('Excel'); 
    }
}


class PDF implements IPrint{
    print(): void {
        console.log('PDF');  
    }
}

class Doc implements IPrint{
    print(): void {
        console.log('Doc');   
    }
}

let objectExcel = new Excel ();
objectExcel.print();