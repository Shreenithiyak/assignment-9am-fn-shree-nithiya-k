const relation = ["mother","father","sibling","cousin","childrens"];//------------list
for (let i = 0; i < relation.length; i++){
    console.log(relation[i]);
} 


function repeatMessage(message, times) {  //-------------message
  for (let i = 1; i <= times; i++) {
    console.log(i + ". " + message);
  }
}

repeatMessage("Hello ALL !!", 2);



const student = {  //-----------user  and tables
  name: ["shree",95],
  age: ["divya",20],
  rollno:["krish",46],
};

for (let key in student) { //-----for in
  console.log(key, "|", student[key]);
}


const fruits = ["Apple", "Banana", "Mango", "Orange"]; //---------menu

for (let item of fruits) { //----for of
  console.log(item);
}


let cartlist =(599,300,199,200); // -------------list
let total = 0;
for(let i=0; i < cartlist; i++){
  total +=cartlist[i];
}
console.log("total cart amount:"+ cartlist);

