//debug
var dice;
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rollDice();
console.log('current dice value', dice); // 
