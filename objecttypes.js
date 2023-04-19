// Object types and types Aliases
var center = {
    x: 0,
    y: 0,
};
var unit = {
    x: 1,
    y: 1
};
// any
var exampleAny;
exampleAny = 123;
//console.log(exampleAny.trim());
// unknown\
var exampleUnknown;
exampleUnknown = "codemind ";
if (typeof exampleUnknown === 'string') {
    console.log(exampleUnknown.trim());
}
