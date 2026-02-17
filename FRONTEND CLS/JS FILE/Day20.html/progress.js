// form validation 

let name = "Nithiya";     // string input
let age = "20";         

// Convert age to number
age = Number(age);

// Validate
if (name === "" || isNaN(age)) {
  console.log("Invalid input!");
} else {
  console.log("Form submitted successfully.");
}


// user login system
let isLoggedIn = false;

// Check login status
if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please login to continue.");
}

// product catalog(objects+array)
const products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mouse",  price: 500 },
  { id: 3, name: "Keyboard", price: 1200 }
];

console.log(products[0].name);  // Laptop
console.log(products.length);   // 3




// financial calculations(BigInt)
// basic number calculation
let amount = 5000;
let tax = amount * 0.18;

console.log("Tax:", tax);

// big number calculation
let bigA = 900719925474099100000n;
let bigB = 50000000000000000000n;

console.log(bigA + bigB);

// interactive UI (objects store UI status)

const uiState = {
  darkMode: false,
  sidebarOpen: true,
  activeTab: "home"
};

// Update UI state
uiState.darkMode = true;

console.log(uiState);