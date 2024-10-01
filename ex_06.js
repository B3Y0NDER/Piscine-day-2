const fruits = ["apple", "banana", "orange", "grape", "strawberry"];
function findFruitIndex(fruitName) {
    const index = fruits.indexOf(fruitName); 
 if (index === -1) { //se rappeler que l'on met const et pas let imbécile
return null;
}
return index; 
function displayResult(result) {
    if (result === null) {
        console.log("Fruit not found."); 
    } else {
        console.log("The index of the fruit is: " + result);
    }
}
const fruitToFind = "banana"; 
const index = findFruitIndex(fruitToFind); 
displayResult(index); 
