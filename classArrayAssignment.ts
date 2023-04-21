class Profile {
    public firstName : string;
    public lastName : string;
    public age : number;

    constructor(firstName : string , lastName : string, age : number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
}

class Player extends Profile {
    constructor(){
        super("Rohit ", "Sharma", 35)
    }
}

let objProfile = new Profile ("Ajay", "Khabale", 24);
console.log(objProfile);

let objPlayer = new Player ();
console.log(objPlayer);


console.log("======Remove Duplicate Element from the array======");
console.log("Given Array =======>");
let givenArray  = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(givenArray);

let setofArray = new Set (givenArray);
console.log(setofArray);






