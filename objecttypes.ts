// Object types and types Aliases

type  Test = {x : number, y : number}


var center :  Test={
    x :0,
    y: 0,
}

var unit : Test = {
    x : 1,
    y : 1
}

// any

var exampleAny  : any ;
exampleAny = 123;
//console.log(exampleAny.trim());
 
// unknown\

var exampleUnknown : unknown;

exampleUnknown = "codemind ";
if (typeof exampleUnknown === 'string') {
    console.log(exampleUnknown.trim());
}


