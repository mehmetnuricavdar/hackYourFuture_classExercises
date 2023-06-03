console.log("I love pizza");

let  favPizza = 'margarita';

let pizzaPrice = 20;

// console.log("New pizza order:" + favPizza + " The price of the pizza is: " + pizzaPrice)
// console.log(`New pizza order: ${favPizza}\ The price of the pizza is ${pizzaPrice}`)

let amountString = prompt("Please enter the number of pizza");

let amount = Number(amountString);

console.log ('you entered', amount)

let FamilyPizzaStr = prompt('Is it family size? Please 1 or 0');

console.log('You entered', FamilyPizzaStr)

let FamilyPizza = Number(FamilyPizzaStr)

let FamilyPizzaPrice = 2*pizzaPrice*FamilyPizza;

totalPrice = amount * pizzaPrice + FamilyPizzaPrice;



console.log(`New pizza order: ${amount} ${FamilyPizza} Family size ${favPizza}. Total cost for the order is: ${totalPrice}`)