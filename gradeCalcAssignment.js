let mathMarks = parseInt(prompt("Please enter Maths Marks"));
console.log("Math: ",mathMarks);
let physicsMarks =parseInt(prompt("Please enter Physics Marks")) ;
console.log("Physics: ",physicsMarks);
let chemistryMarks =parseInt(prompt("Please enter Chemistry Marks")) ;
console.log("Chemistry: ",chemistryMarks);
let sumofMarks = mathMarks + physicsMarks + chemistryMarks
console.log(`The total of all marks is : `,sumofMarks);
let average = sumofMarks/3
console.log(`Average of marks: ${average}`);
if (average<70) {
    console.log("Your grade is C");
}else if (average > 70 && average <=90) {
    console.log("Your grade is B");
}else if (average > 90) {
    console.log("Your grade is A");
}