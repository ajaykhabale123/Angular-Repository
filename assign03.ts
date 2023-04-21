console.log("1] ======== Create employee class with different properties ========");
class Employee {
    public empid : number;
    public empName : string;
    public empDepartment : string;
    public isTransportAvail : boolean;
    constructor(empid : number, empName : string, empDepartment : string, isTransportAvail? ) {
        this.empid = empid ;
        this.empName = empName;
        this.empDepartment = empDepartment;
        this.isTransportAvail = isTransportAvail
    }
    hello(){
        if (this.isTransportAvail != undefined) {
            console.log(`Employee Id: ${this.empid}, Employee Name: ${this.empName}, Employee Department: ${this.empDepartment}, IsTransport Avialable: ${this.isTransportAvail}  `);
           
        }else {
           console.log(`Employee Id: ${this.empid}, Employee Name: ${this.empName}, Employee Department: ${this.empDepartment}`);
           
        }
    }
}
let objEmployee1 = new Employee (88,"Ajay","IT", true);
objEmployee1.hello();


console.log("===========================================================");

console.log("2] ======== Make isTransportAvail Property Optional ========");
let  objEmployee2 = new Employee (66,"Aditya","HR");
objEmployee2.hello();
console.log("===========================================================");
console.log("3] ======== Try to implements module concept using export and import ========");

import { isPalindrome } from "./exportAssign03";

console.log(`98789 ispalindrome ==> ` ,isPalindrome('98789')) ;
console.log(`89765 ispalindrome ==> `, isPalindrome('89765')) ;
console.log(`nayan ispalindrome ==>`, isPalindrome('nayan')) ;
console.log(`dad ispalindrome ==>`, isPalindrome('dad')) ;
console.log(`ajay ispalindrome ==>`, isPalindrome('ajay')) ;

console.log("===========================================================");
console.log("4] ======== Create method findEmployees and make it overloading ========");

function findEmployees(id : any , name: string){
    if (id && typeof id === "number") {
        console.log(`Datatype of Emp id is ${typeof id}, Emp id: ${id}, Emp Name : ${name}`);
        
    }else if (id && typeof id === "string") {
        console.log(`Datatype of Emp id is ${typeof id}, Emp id: ${id}, Emp Name : ${name}`);
    }else if (id && typeof id === "boolean") {
        console.log(`Datatype of Emp id is ${typeof id}, Emp id: ${id}, Emp Name : ${name}`);
}
}
findEmployees(88, "Ajay");
findEmployees(66, "Aditya");
findEmployees("66","Rohan");
findEmployees(true, "Sachin")

