let total = document.getElementById("total");
let SavedItems =document.getElementById("saved-items");


const cart = JSON.parse(localStorage.getItem("amount")) || [ ] ;

let calculation = () => {
  let cartIcon = document.getElementById("amount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


let generateCartItems = ()=> {
  if(cart.length !==0) {

 return (SavedItems.innerHTML= cart.map ((x) =>{

  let { id, item } =x;
let search = mergedArray.find((x) => x.id === id) || [];
let { img, price, name } = search;
return `
<div class="card">
<img src=${img} width="50" class="card-img-top"/>
<div class="card-body">
<p>${name}</p> 
<p>${price}</p>
<div class="quantity">${item}</div>
</div>
</div>

`;
 })
 .join(""));
  } else {
  SavedItems.innerHTML= "";
total.innerHTML = `
 <div class="cart-message">Cart is Empty!</div>
 <a href="index.html" class="home-button" title="Back to Homepage">Back to Home</a>
 `;
}
  };


generateCartItems();