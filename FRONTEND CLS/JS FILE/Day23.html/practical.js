class user {
  constructor(name,email,) {
    this.name = name;
    this.email = email;
  }

Login(){
    return `${this.name} has logged in successfully`;
}
}
const user1 = new user("shree","shree@example.com");
console.log(user1.Login());

//---------------------------------------------------------
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ₹${amount}. New Balance: ₹${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return `balance! Available: ₹${this.balance}`;
    }
    this.balance -= amount;
    return `Withdrawn ₹${amount}. New Balance: ₹${this.balance}`;
  }
}

// Creating an account
const acc1 = new BankAccount("Shree", 5000);

// Using methods
console.log(acc1.deposit(2000));
console.log(acc1.withdraw(1000));
console.log(acc1.withdraw(7000));   // Trying more than balance

//------------------------------------------------------------------------
const product1 = {
  name: "Laptop",
  price: 55000,
  brand: "Dell"
};
const product2 = {
  name: "Headphones",
  price: 2000,
  brand: "Sony"
};
//destructing
const { name, price, brand } = product1;
console.log(name);
console.log(price);
console.log(brand);

//-------------------------------------------------------------------------
function vehicle(type){
    this.type = type;
}
vehicle.prototype.start = function(){  //strats from here
    return`${this.type} is starting...`;
};
function Car(brand,type){
    vehicle.call(this,type);
    this.brand = brand;
}
Car.prototype = Object.create(vehicle.prototype);
Car.prototype.contructor = Car;
Car.prototype.drive = function(){    // 
  return`${this.brand} car is driving.`;
};
function ElectricCar(brand,type,battery){
  Car.call(this,brand,type);
  this.battery = battery;
}
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.contructor = ElectricCar;
ElectricCar.prototype.charge = function(){
  return`Charging battery: ${this.battery}%`;
};
const tesla = new ElectricCar("MG(Electric)","Eletric",90);
console.log(tesla.start());
console.log(tesla.drive());
console.log(tesla.charge())
//----------------------------------------------------------------------------
class Student{
  constructor(name ="shravin",grade,course = "cs"){
    this.name = name;
    this.grade = grade;
     this.course = course;
  
  }
  getInfo(){
    return`${this.name}  is  grade ${this.grade}`;
  }
  getCourse(){
    return`${this.name} is studying ${this.course}`;
  }
}
const m1 = new Student("varma","6th",);
const m2 = new Student();
console.log(m1.getInfo());
console.log(m2.getCourse());