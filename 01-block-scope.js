// block scope

var x = 10;
if (x !== 10) {
    var y = 500;
    console.log('var y in = '+y);
}
console.log('var y out = '+y);

let x1 = 10;
let y1 = 50
if (x1 === 10) {
    let y1 = 500;
    console.log('let y in = '+y1);
}
console.log('let y out = '+y1);