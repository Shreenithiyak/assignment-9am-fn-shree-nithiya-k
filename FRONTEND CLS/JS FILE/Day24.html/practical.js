class product {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  discountedprice() {
    // reduce price by 10%
    this.price = this.price - (this.price * 0.50);
    return this.price;
  }
}

// Creating an object
const phone1 = new product("Samsung", 200000);

// Apply discount
console.log("Price After Discounted:", phone1.discountedprice());


class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    return `${this.name} has logged in successfully!`;
  }
  logout(){
    return`${this.name} has loged out`;
  }
}

// Create an object
const user1 = new User("User Shree");

// Using the method
console.log(user1.login());
console.log(user1.logout());


class Student {
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
    display(){
        return`${this.name} scored ${this.marks}`;
    }
}
const s1 = new Student("sam",95);
const s2 = new Student("siva",80);
const s3 = new Student("sharuk",75);
console.log(s1.display());
console.log(s2.display());
console.log(s3.display());


class Shape {
    constructor(name){
        this.name = name;
    }
}
 class Circle extends Shape{
    constructor(radius){
        super("Circle");
        this.radius = radius;
    }
    area(){
        return 3.14 * this.radius * this.radius; 
    }
 }
const c1 = new Circle(6);
console.log("Area:",c1.area());

Student.prototype.grade = function (){
    if (this.marks >= 90) return "Grade A";
    else if (this.marks >=170) return "Grade B";
    else return "Grade C"; 
};
console.log (s1.grade());
console.log (s2.grade());
console.log (s3.grade());




