//1

const { Console } = require("console");
const { title } = require("process");

class product {
    constructor(id,name,price){
        this.id =id;
        this.name = name;
        this.price = price;
    }
}


class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    greet(){
        return`welcome, ${this.name}!`;
    }
}


class Cart{
    constructor(){
        this.item =[];
    }
    addproduct(product){
        this.item.push(product);
    }

}
const p1 = new product(1,"laptop",49000);
console.log(p1);

const u1 = new user("shree","shree@example.com");
console.log(u1.greet());

const cart = new Cart();
cart.addproduct(new product(1, "Mobile", 15000));
cart.addproduct(new product(2, "Neckband", 1500));
cart.addproduct(new product(3, "Ironbox", 2000));
console.log("cart detail:",cart);


//2
class Button {
    constructor(label,onClick){
        this.label = label;
        this.onClick = onClick;
    }
    press(){
        return this.onClick();
    }
}
const loginBtn =new Button("Login",()=>"login button pressed");
console.log(loginBtn.press());

class Modal{
constructor(){
this.visible = false;
}
open(){
this.visible = true;
return "Modal opened";
}
close(){
this.visible=false;
return "Modal closed";
}
}
const modal = new Modal();
console.log(modal.open());
console.log(modal.close());

class FormHandler{
submit(data){
return`Form submitted with:${JSON.stringify(data)}`;
}
}
const form = new FormHandler();
console.log(form.submit({name: "shree",age:22}));


const productData ={
    id:1,
    name:"keyboard",
    price:1200,
};
console.log(productData);

const props ={
    title:"welcome",
    message:"This is a React-like example"
};
const{title,message}=props;
console.log(title);
console.log(message);


