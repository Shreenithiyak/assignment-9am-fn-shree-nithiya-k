for (let i = 1; i <= 10; i++) {
  console.log(i);
}



let num = 2;

while (num <= 20) {
  console.log(num);
  num += 2;  
}



let x = 5;

do {
  console.log("This will run once even if the condition is false");
} while (x < 0); //false




const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let item of fruits) {
  console.log(item);
}




const student = {
  name: "shree",
  age: 20,
  rollno: "46"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}

