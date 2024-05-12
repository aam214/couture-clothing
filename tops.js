let shops =document.getElementById('tops');

let cart = JSON.parse(localStorage.getItem("amount")) || [ ] ;

let topsItemsData = [
  { id: "clothingItem9", 
  name: "Crop Top",
price: 20,  
img: "pictures/black-crop.jpg",} ,
{id: "clothingItem10", 
name: "Knit Top",
price: 40, 
img: "pictures/orange-top.jpg",} ,
{id: "clothingItem11", 
name: "Blazer",
price: 100,
img: "pictures/blazer.jpg",} ,
{ id: "clothingItem12", 
name: "Halter",
price: 60, 
img: "pictures/halter.jpg",} ,
{ id: "clothingItem13", 
name: "Boho Top",
price: 90, 
img: "pictures/boho-top.jpg",} ,
{ id: "clothingItem14", 
name: "Flannel",
price: 60,
img: "pictures/flannel.jpg",} ,
{id: "clothingItem15", 
name: "Blouse",
price: 70, 
img:"pictures/brown-blouse.jpg",} ,
{id: "clothingItem16", 
name: "Sweater",
price: 80, 
img:"pictures/turtleneck.jpg",}

];


let generateTops = () =>{
return (tops.innerHTML = topsItemsData.map((x) =>{
let {id, name, price, img} =x;
let search = cart.find((x)=>x.id===id) || [];
  return `
<div id=product-id-${id} class="card">
  <img src=${img} class="img-fluid rounded shadow" alt="Dresses">
  <div class="card-body">
    <p class="card-text">${name} </p>
<div class="cost">
<span>$ ${price} </span>
<span class="quantity">
<i class="fa-solid fa-minus" onClick="decrement(${id})"></i>
<span id=${id} class="number">${search.item===undefined? 0 : search.item}</span>
<i class="fa-solid fa-plus" onClick="increment(${id})"></i>
</span>
</div>
<div class="click">Add to cart</div>
</div>
</div>`;
})
.join(""));
};

generateTops(); 
  
  
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
  update(selectedItem.id);
  localStorage.setItem("amount", JSON.stringify(cart));
  };
  
  let decrement = (id) => {
    let selectedItem= id;
  let search = cart.find((x) =>x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else{
    search.item -=1;
  }
  update(selectedItem.id);
  cart = cart.filter ((x) => x.item !==0);
  localStorage.setItem("amount",JSON.stringify(cart));
  };
  
  let update = (id)=>{
    let search =cart.find((x) =>x.id=== id);
    document.getElementById(id).innerHTML =search.item;
  calculation();
  };
  
  let calculation = () => {
    let cartIcon = document.getElementById("amount");
    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  