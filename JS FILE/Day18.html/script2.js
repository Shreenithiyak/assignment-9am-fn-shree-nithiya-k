const userprofile={
    name:"Shree Nithya K",
    age:22,
    profession:"Developer"
};
userprofile.age=23;
userprofile.profession="frontend Developer";
userprofile.Email="example.@example.com";
userprofile.phone=1234567890;
console.log(userprofile);



let A= 78;
let B= 97;
result= A>B ? "A is greater":"B is greater";
console.log(result);
result=A+B ;
console.log(result)
result=A-B ;
console.log(result)
result=A*B ;    
console.log(result) 




const cartitem ={
    itemname:"Laptop",
    price:45000,
    quantity:1
}
cartitem.price=43000;
cartitem.quantity=2;
console.log(cartitem);




const defaultSetting ={
    theme:"dark",
    fontSize:14,
    language:"english"
};
let userSetting ={
    theme:defaultSetting.theme,
    fontSize:defaultSetting.fontSize,
    language:defaultSetting.language,
};
console.log(userSetting);