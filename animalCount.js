
function animalCount(depth) {
    var animal = 0;
    if(depth <= 10) {
        animal = depth *50 ;
    }
    else if(depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10 ;
        var secondPart = remaining * 100 ;
        var animal = firstPart + secondPart;
    }
    else {
        firstPart = 10 * 50;
        secondPart = 10 * 100;
        remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart
    }
    return animal ;
}
var result = animalCount(7);
console.log(result);
