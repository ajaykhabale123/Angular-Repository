// function overloading or Method overloading . Compile time polymorhism
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name); });
        // map creates a new array 
    }
}
doubleMe(2);
doubleMe("Rocky");
doubleMe(["a", "b", "c"]);
