let shop =document.getElementById('store');
let storeItemsData = 
[{ id: "Clothing Item1", name: "Silk Dress",
price: 50,  
img: "pictures/off-shoulder-dress.jpg",},
{id: "Clothing Item2", name: "Sequin Dress",
price: 99, 
img: "pictures/sequin-dress.jpg",},
{id: "Clothing Item3", name: "Casual Dress",
price: 70,
img: "pictures/leather-jacket.jpg",},
{ id: "Clothing Item4", name: "Summer Dress",
price: 58, 
img: "pictures/white-dress.jpg",},
{ id: "Clothing Item5", name: "Spring Dress",
price: 40, 
img: "pictures/casual-dress.jpg"},
{ id: "Clothing Item6", name: "Wedding Dress",
price: 570,
img: "pictures/wedding.jpg",},
{id: "Clothing Item7", name: "Formal Dress",
price: 150, 
img:"pictures/bridesmaid.jpg", },
{id: "Clothing Item8", name: "Chiffon Dress",
price: 90, 
img:"pictures/red-oneshoulder.jpg",}]

let generateStore = () =>{

return (store.innerHTML = storeItemsData.map((x) =>{
let {id, name, price, img} =x;

  return `
<div id=product-id-${id} class="card">
  <img src=${img} class="img-fluid rounded shadow" alt="Silk Dresses">
  <div class="card-body">
    <p class="card-text">${name} </p>
<div class="cost">
<strong>$ ${price} </strong>
<span class="quantity">
<i class="fa-solid fa-minus" onClick="decrement()"></i>
<span id=${id} class="number">0</span>
<i class="fa-solid fa-plus" onClick="increment()"></i>
</span>
</div>
<div class="click">Add to cart</div>
</div>
</div>`;
})
.join(""));
};

generateStore(); 
  
let increment = () => {

console.log("increment");
};

let decrement = () => {
  console.log("decrement");
};


