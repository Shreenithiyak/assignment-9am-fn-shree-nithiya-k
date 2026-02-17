let book = {
    title:"Atomic Habits", 
    author: "james Clear", 
    year:2018,
    getInfo(){
        return `${this.title} by ${this.author} published in the year of ${this.year}`;
    }
};
console.log(book.getInfo());

const {title,author} = book;
console.log(title);
console.log(author);

class mobile {
  constructor(brand,price) {
    this.brand = brand;
    this.price = price;
  }
  discount(){
    //reduce price by 10%
    this.price = this.price -(this.price*0.10);
    return this.price;
  }
}
const phone1 = new mobile("Samsung",40000);
console.log("original price:",phone1.price);
console.log("after 10% discount:",phone1.discount());