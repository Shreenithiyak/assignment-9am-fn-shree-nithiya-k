const color = ["Red","Blue","Black","White","Brown"];
console.log("First color:",color[0]);
console.log("last color:",color[4]);


const fruits =["Apple","Banana"];
fruits.pop();
console.log(fruits);

fruits.push("Orange");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Mango");
console.log(fruits);


const numbers =[10,20,30,40,100];
numbers.forEach(function(num){
    console.log(num);
});

const squareNumbers = numbers.map(function(num){
    return num * num;
});
console.log(squareNumbers);


const greaterThan50 = numbers.filter(function(num){
    return num > 50;
});

console.log(greaterThan50);






