let studentprofile = {
    name: "shree",
    age: 24,
    department:"web development",
    rollNo:654,
    college:"ABC college"
};
console.log(studentprofile);
console.log(typeof studentprofile);




// product price and quantity stored ad String
let price = "100";
let quantity = "5";
//  convert string to numbers
let newprice = Number(price);
let newquantity = Number(quantity);
// calculate total price
let total = newprice * newquantity;
// 
console.log("price : " + price);
console.log("quantity   : " + quantity);
console.log("total price : " + total);




// check user is logged in or not using boolean
let isloggedin = true;
if(isloggedin){
    console.log("user is logged in");
}else{
    console.log("user is not logged in");
}
let isloggerin =false;
if(isloggerin){
    console.log("user is logged in");
}else{
    console.log("user is not logged in");
}




// big number using BigInt
let big1 =123456789123456789123456789n;
let big2 =987654321987654321987654321n;
let result = big1 + big2;
console.log("big1 : " + big1);
console.log("big2 : " + big2);
console.log("Adiition result : " + result);



// Create unique Symbol IDs
const id1 = Symbol("user1");
const id2 = Symbol("user2");
const id3 = Symbol("user3");

// Create user objects
const user1 = {
  id: id1,
  name: "Nithiya",
  age: 20
};

const user2 = {
  id: id2,
  name: "Kiran",
  age: 22
};

const user3 = {
  id: id3,
  name: "Asha",
  age: 21
};

// Print users
console.log(user1);
console.log(user2);
console.log(user3);
