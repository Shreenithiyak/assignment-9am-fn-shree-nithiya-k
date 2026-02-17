const pi = 21.03;
let person = "shree nithiya.k";
let answer = 'Yes I am!';
console.log(pi+", "+person+", "+answer);



let name = "sri";
 let name= "shree";
// //   error statement of redeclaration
// // but we can reasign as like this 
// let name = "sri";
//  name= "shree";
console.log(name);   //  TDZ error
let name = "Shree";


{
    const z = 30;
    console.log("Inside block:", z);   // ✔ 30
}

console.log("Outside block:", z);      //  ERROR


const student = {
  name: "Shree",
  age: 20
};
student.age = 21; // Allowed: Modifying properties of the object
student.name = "Nithiya"; // Allowed: Modifying properties of the object
console.log(student); // Output: 21