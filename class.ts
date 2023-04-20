class Student {
    public firstName : string;
    public lastName : string;

    constructor(firstName : string , lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

class Test extends Student {
    constructor(){
        super("test", "test 2")
    }
}
// creating the object of student class
var objStudent = new Student (`codemind`, `Technology`);

console.log(objStudent);
// creating object of test class
var objTest = new Test()

console.log(objTest);
