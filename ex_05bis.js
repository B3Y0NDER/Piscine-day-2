function getBasketContent() {
    let fruits = []; 
let selectedCount= 12

    fruits.push("strawberry");
    fruits.push("strawberry");
    fruits.push("strawberry");
    fruits.push("apple");
    fruits.push("apple");
    fruits.push("lime");
    fruits.push("lime");
    fruits.push("peach");
    fruits.push("pear");
    fruits.push("pear");
    


    let totaldefruits = fruits.length;
if (selectedCount > totaldefruits){
 console.log("Too many Fruits selected")
 } else {
 console.log("Total: " + totaldefruits + " fruits"); 
 }
    
    return fruits; 
}


getBasketContent(12); 


// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
