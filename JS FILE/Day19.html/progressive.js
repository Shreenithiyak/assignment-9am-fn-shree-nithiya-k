// Accecpting the user InputDeviceInfo(string)
let username =("kavin:");
console.log("Username:", username);  // string

// Storing numeric value
let price = "100";
let quantity = "5";
let total = price * quantity; 
console.log("Total:", total);

// manage Array of items
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);       // Apple
console.log(fruits.length);   // 3

// objects for form DataTransfer,products,students
let formdata = {
    name: "Abi",
    age: 20,
    email: "abi@gmail.com"
};
console.log("formdata:", formdata);  

const product = {
  id: 1,
  title: "Laptop",
  price: 45000
};
console.log("Product:", product);

const student = {
  name: "Asha",
  rollNo: 102,
  marks: 87
};
console.log("Student:", student);


// UI states using boolean

// dark mode
let darkMode = false;

if (darkMode) {
  console.log("Dark mode ON");
} else {
  console.log("Dark mode OFF");
}

// login state
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome User!");
} else {
  console.log("Please log in.");
}

// vivibility
let isVisible = true;

if (isVisible) {
  console.log("Show content");
} else {
  console.log("Hide content");
}
