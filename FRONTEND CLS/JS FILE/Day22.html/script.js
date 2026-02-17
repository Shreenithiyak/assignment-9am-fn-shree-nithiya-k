function greet(){
    console.log("good morning");
}
greet();



function add(a, b){
    let sum = a + b;
    console.log("print sum:" + sum)
}
add(21,67);



function square(num){
    return num*num;
}
console.log( square(7));


const multiply = (a, b) => a * b;
console.log(multiply(8,75));


function greet(name = "Student") {
  console.log("Hello, " + name + "!");
}
greet();
