"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("1] ======== Create employee class with different properties ========");
var Employee = /** @class */ (function () {
    function Employee(empid, empName, empDepartment, isTransportAvail) {
        this.empid = empid;
        this.empName = empName;
        this.empDepartment = empDepartment;
        this.isTransportAvail = isTransportAvail;
    }
    Employee.prototype.hello = function () {
        if (this.isTransportAvail != undefined) {
            console.log("Employee Id: ".concat(this.empid, ", Employee Name: ").concat(this.empName, ", Employee Department: ").concat(this.empDepartment, ", IsTransport Avialable: ").concat(this.isTransportAvail, "  "));
        }
        else {
            console.log("Employee Id: ".concat(this.empid, ", Employee Name: ").concat(this.empName, ", Employee Department: ").concat(this.empDepartment));
        }
    };
    return Employee;
}());
var objEmployee1 = new Employee(88, "Ajay", "IT", true);
objEmployee1.hello();
console.log("===========================================================");
console.log("2] ======== Make isTransportAvail Property Optional ========");
var objEmployee2 = new Employee(66, "Aditya", "HR");
objEmployee2.hello();
console.log("===========================================================");
console.log("3] ======== Try to implements module concept using export and import ========");
var exportAssign03_1 = require("./exportAssign03");
console.log("98789 ispalindrome ==> ", (0, exportAssign03_1.isPalindrome)('98789'));
console.log("89765 ispalindrome ==> ", (0, exportAssign03_1.isPalindrome)('89765'));
console.log("nayan ispalindrome ==>", (0, exportAssign03_1.isPalindrome)('nayan'));
console.log("dad ispalindrome ==>", (0, exportAssign03_1.isPalindrome)('dad'));
console.log("ajay ispalindrome ==>", (0, exportAssign03_1.isPalindrome)('ajay'));
console.log("===========================================================");
console.log("4] ======== Create method findEmployees and make it overloading ========");
function findEmployees(id, name) {
    if (id && typeof id === "number") {
        console.log("Datatype of Emp id is ".concat(typeof id, ", Emp id: ").concat(id, ", Emp Name : ").concat(name));
    }
    else if (id && typeof id === "string") {
        console.log("Datatype of Emp id is ".concat(typeof id, ", Emp id: ").concat(id, ", Emp Name : ").concat(name));
    }
    else if (id && typeof id === "boolean") {
        console.log("Datatype of Emp id is ".concat(typeof id, ", Emp id: ").concat(id, ", Emp Name : ").concat(name));
    }
}
findEmployees(88, "Ajay");
findEmployees(66, "Aditya");
findEmployees("66", "Rohan");
findEmployees(true, "Sachin");
