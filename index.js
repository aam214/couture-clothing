let shop =document.getElementById('store');

let storeItemsData = [
  { id: "clothingItem1", 
  name: "Silk Dress",
price: 50,  
img: "pictures/off-shoulder-dress.jpg",} ,
{id: "clothingItem2", 
name: "Sequin Dress",
price: 99, 
img: "pictures/sequin-dress.jpg",} ,
{id: "clothingItem3", 
name: "Casual Dress",
price: 70,
img: "pictures/leather-jacket.jpg",} ,
{ id: "clothingItem4", 
name: "Summer Dress",
price: 58, 
img: "pictures/white-dress.jpg",} ,
{ id: "clothingItem5", 
name: "Spring Dress",
price: 40, 
img: "pictures/casual-dress.jpg",} ,
{ id: "clothingItem6", 
name: "Wedding Dress",
price: 570,
img: "pictures/wedding.jpg",} ,
{id: "clothingItem7", 
name: "Formal Dress",
price: 150, 
img:"pictures/bridesmaid.jpg",} ,
{id: "clothingItem8", 
name: "Chiffon Dress",
price: 90, 
img:"pictures/red-oneshoulder.jpg",}
];

let cart =[ ];

let generateStore = () =>{

return (store.innerHTML = storeItemsData.map((x) =>{
let {id, name, price, img} =x;

  return `
<div id=product-id-${id} class="card">
  <img src=${img} class="img-fluid rounded shadow" alt="Dresses">
  <div class="card-body">
    <p class="card-text">${name} </p>
<div class="cost">
<strong>$ ${price} </strong>
<span class="quantity">
<i class="fa-solid fa-minus" onClick="decrement(${id})"></i>
<span id=${id} class="number">0</span>
<i class="fa-solid fa-plus" onClick="increment(${id})"></i>
</span>
</div>
<div class="click">Add to cart</div>
</div>
</div>`;
})
.join(""));
};

generateStore(); 
  
let increment = (id) => {
let selectedItem= id;
let search = cart.find((x) =>x.id ===selectedItem.id);

if (search === undefined){
cart.push ({
  id: selectedItem.id,
  item: 1,
});

}else {
  search.item +=1;
}
console.log(cart);
};

let decrement = (id) => {
  let selectedItem= id;
  console.log(selectedItem.id);
};  


