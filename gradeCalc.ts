function marks(a: number, b: number, c: number) {
    var avg: number = (a+b+c) / 3;

    if (avg <= 70) {
        return `Grade C (${avg})`;        
    } else if (avg > 70 && avg < 90) 
    {
        return `Grade B (${avg})`;   
    } else {
        return `Grade A (${avg})`;   
    }
}
var math = Number(prompt(`Enter the math marks`)) ;
var physics = Number(prompt(`Enter the physics marks`)) ;
var chemistry = Number(prompt(`Enter the chemistry marks`)) ;

console.log(marks(math, physics, chemistry));