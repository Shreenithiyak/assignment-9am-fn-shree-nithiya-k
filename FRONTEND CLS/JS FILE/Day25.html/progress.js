const product =[{ name: "product 1",price:10},
    {name:"product 2",price: 60},
    {name:"procduct 3",price: 700},
    {name:"product 4",price:100},
    {name: "product 5",price:950}
];
const container = document.getElementById("product");
product.forEach(p =>{
    container.innerHTML +=`<div class ="product">
    <h2>${p.name}</h2>
    <p> price:$${p.price}</p>
    <button> BUY NOW </button>
    </div>`;
});


const cheapList = document.getElementById("cheapproducts");
const cheapproducts = products.filter(product =>product.price < 500);
cheapproducts.forEach(product =>{
    const li = document.createElement("li");
    li.textContent = `${product.name}-₹${product.price}`;
    cheapList.appendChild(li);
});


const total = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

document.getElementById("totalPrice").textContent =
  "Total Price: ₹" + total;
