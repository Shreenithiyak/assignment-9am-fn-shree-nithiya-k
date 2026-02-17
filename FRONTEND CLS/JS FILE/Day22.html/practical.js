function add(a, b){
    let sum = a + b;
    console.log("print sum:" + sum)
}
add(21,67);

function sub(a, b){
    let sum = a - b;
    console.log("print sum:" + sum)
}
sub(21,67);

const multiply = (a, b) => a * b;
console.log(multiply(8,75));

function divide(a, b){
    let sum = a / b;
    console.log("print sum:" + sum)
}
divide(21,67);//---------------calci

function greet(name) {  
   return "Hello,"+ name +"!";
}

console.log(greet("sir")); //-----------greetings

function gradeChecker(marks){
    if (marks >=90) return "Grade A";
    else if (marks >= 75) return "Grade B";
    else if (marks >= 60) return "Grade c";
    else if (marks >= 75) return "Grade D";
    else return "Grade F";
}
console.log(gradeChecker(100));
console.log(gradeChecker(10));
console.log(gradeChecker(60));
console.log(gradeChecker(80)); //--------------grade


function rectangleArea(length, width) {
  return length * width;
}

console.log(rectangleArea(10, 5));
console.log(rectangleArea(7, 3)); //-------rect calci


function login(username, password) {
  let correctUser = "admin";
  let correctPass = "1234";

  if (username === correctUser && password === correctPass) {
    return "Login Successful";
  } else {
    return "Try Again";
  }
}

console.log(login("admin", "1234"));
console.log(login("user", "9999"));

