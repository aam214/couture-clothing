let total = document.getElementById("total");
let SavedItems =document.getElementById("saved-items");


let cart = JSON.parse(localStorage.getItem("amount")) || [ ] ;

let calculation = () => {
  let cartIcon = document.getElementById("amount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


let generateCartItems = ()=> {
  if(cart.length !==0) {

 return (SavedItems.innerHTML= cart.map ((x) =>{

  let { id, item } =x;
let search = mergedArray.find((y) => y.id === id) || [];
let { img, price, name } = search;
return `
<div class="summary">
<div class="card mx-4" style="width: 20rem;"  >
  <div class="card-body">
  <i onClick= "removeItem(${id})" class="fa-solid fa-x"></i>
    <h6 class="card-title">${name}</h6>
    <h6 class="card-subtitle text-center mb-1">$${item * price}</h6>
    <img src =${img} width= "180" class= "rounded shadow ms-5"/>
    <div class="cost-of-item">$${price}</div>
    <span class="quantity-in-cart">
    <i class="fa-solid fa-minus" onClick="decrement(${id})"></i>
    <span id=${id} class="number">${item}</span>
    <i class="fa-solid fa-plus" onClick="increment(${id})"></i>
    </span>
  </div>
  </div>
`;
 })
 .join(""));
  } else {
  SavedItems.innerHTML= "";
total.innerHTML = `
 <div class="cart-message">
 <h2>Cart is Empty!</h2>
 <button class=home-button>Back to Home</button>
 </div>
 `;
}
  };

  generateCartItems();

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
  generateCartItems();
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
  generateCartItems();
  localStorage.setItem("amount",JSON.stringify(cart));
  };
  
  let update = (id)=>{
  let search = cart.find((x) => x.id=== id);
  document.getElementById(id).innerHTML =search.item;
  calculation();
  checkoutTotal();
  };
  

  let removeItem = (id) => {
  let selectedItem = id;
  cart = cart.filter ((x) => x.id !== selectedItem.id);
  calculation();
  checkoutTotal();
  generateCartItems();
  localStorage.setItem("amount" , JSON.stringify(cart));
  };

  let checkoutTotal = () => {
    if (cart.length !== 0){
      let amount =cart.map ((x) =>{
        let { item, id }= x;
        let filterData = mergedArray.find((y)=> y.id=== id);
      return item * filterData.price;
      }).reduce ((x,y) => x +y, 0);
      total.innerHTML= `
      <div class="total-summary"> 
      <h2 class="total-heading">Total: $${amount}</h2>
      <div class="cart-buttons">
      <button class="checkout-button">Checkout</button>
      <button onClick="clearOut()" class="clear-cart-button">Clear Cart</button>
      </div>
      </div>`
  } else return;
};
checkoutTotal();

let clearOut = () => {
  cart = [];
  generateCartItems();
  calculation();
  localStorage.setItem("amount" , JSON.stringify(cart));
  };
