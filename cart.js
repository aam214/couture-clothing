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
  <div class="shopping-cart-cards">
  <h4 class="card-header m-3">${name}</h4>
  <i onClick= "removeItem(${id})" class="fa-solid fa-x"></i>
    <img src =${img} width= "140" class= "rounded shadow ms-4"/>
      <div class="shopping-cart-details">
      <div class="cost-of-item">$${price}</div>
      <div class="quantity-in-cart">
      <i class="fa-solid fa-minus" onClick="decrement(${id})"></i>
      <span id=${id} class="number">${item}</span>
      <i class="fa-solid fa-plus" onClick="increment(${id})"></i>
      </div>
      <div class="total-cost">$ ${item * price}</div>

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
      <h2 class="text-center">Total: $${amount}</h2>
      <button class="checkout-button">Checkout</button>
      <button onClick="clearOut()" class="clear-cart-button">Clear Cart</button>
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
