function marks(a, b, c) {
    var avg = (a + b + c) / 3;
    if (avg <= 70) {
        return "Grade C (".concat(avg, ")");
    }
    else if (avg > 70 && avg < 90) {
        return "Grade B (".concat(avg, ")");
    }
    else {
        return "Grade A (".concat(avg, ")");
    }
}
var math = Number(prompt("Enter the math marks"));
var physics = Number(prompt("Enter the physics marks"));
var chemistry = Number(prompt("Enter the chemistry marks"));
console.log(marks(math, physics, chemistry));
