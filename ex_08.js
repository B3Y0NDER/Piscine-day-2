let fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function findFruit(param) {
    if (typeof param === 'string') {
        let index = fruits.indexOf(param);
        if (index === -1) {
            return null;
        }
return index;
    } 
if (typeof param === 'number') {
if (param === -1) {
            return fruits[fruits.length - 1];
        } 
if (param < 0 || param >= fruits.length) {
            return null;
        }
 return fruits[param];
    }
 return null;
}
function displayResult(result) {
    if (result === null) {
        console.log("Fruit not found.");
    } else {
        console.log("The result is: " + result); }
}
let fruitName = "Banana";
let fruitIndex = findFruit(fruitName);
displayResult(fruitIndex);

let index = 3;
let fruit = findFruit(index);
displayResult(fruit);
