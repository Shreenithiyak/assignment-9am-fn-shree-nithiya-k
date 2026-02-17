//  student info object
const studentInfo = {
  name: "shree Nithiya",
  age: 20,
  grade: "A"
};

// Print values
console.log( studentInfo);

// Cart Total (String → Number Conversion)
// string conversion
let price1 = "120";   
let qty1   = "2";    

let price2 = "80";    
let qty2   = "3"; 
// Number conversion
let nPrice1 = Number(price1);
let nQty1   = Number(qty1);

let nPrice2 = Number(price2);
let nQty2   = Number(qty2);
// Calculating total
let total = (nPrice1 * nQty1) + (nPrice2 * nQty2);
console.log("item 1 total:",nPrice1 * nQty1);
console.log("item 2 total:",nPrice2 * nQty2);
console.log("Cart Total:", total); 



// login status with Boolean Conversion
let isLoggedIn = true;   // change to false to test

if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please Login");
}

// big number using BigInt
let big1 =123456789123456789123456786n;
let big2 =987654321987654321987654329n;
let result = big1 + big2;
console.log("big1 : " + big1);
console.log("big2 : " + big2);
console.log("Adiition result : " + result);5


// Create unique Symbol IDs
const userId1 = Symbol("user");
const userId2 = Symbol("user");
const userId3 = Symbol("user");

// Create user objects with unique IDs
const user1 = {
  id: userId1,
  name: "shree"
};

const user2 = {
  id: userId2,
  name: "Kiran"
};

const user3 = {
  id: userId3,
  name: "Asha"
};

// Print users
console.log(user1);
console.log(user2);
console.log(user3);
