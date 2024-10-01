let fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getFruitFromIndex(index) {
if (index === -1) {
return fruits[fruits.length - 1];
} else if (index < 0 || index >= fruits.length) {
return null;
} else {
return fruits[index];
}
}
function displayResult(result) {
if (result === null) {
console.log("Fruit not found.");
    } else {
        console.log("The fruit is: " + result);
    }
}

let index = -1;
let fruit = getFruitFromIndex(index);
displayResult(fruit);
