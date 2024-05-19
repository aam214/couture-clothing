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
<div class="card">
  <h4 class="card-header">
  ${search.name}
  </h4>
  <div class="card-body">
<i onClick= "removeItem(${id})" class="fa-solid fa-x"></i>
  <img src =${search.img} width= "200" class= "ms-4 img-fluid rounded shadow ms-3"/>
    <h4 class="card-title"></h4>
    <p class="card-text ">$${search.price}</p>
    <span class="quantity-cart">
    <i class="fa-solid fa-minus" onClick="decrement(${id})"></i>
    <span id=${id} class="number">${item}</span>
    <i class="fa-solid fa-plus" onClick="increment(${id})"></i>
    </span>
    <span class="total-cost">$ ${item * search.price}</span>
    </div>
  </div>
</div>
</div>

`;
 })
 .join(""));
  } else {
  SavedItems.innerHTML= "";
total.innerHTML = `
 <div class="cart-message">Cart is Empty!</div>
 
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
  };
  

  let removeItem = (id) => {
  let selectedItem = id;
  cart = cart.filter ((x) => x.id !== selectedItem.id);
  calculation();
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
      <h2 class="text-center">Total Price : $ ${amount}</h2>
      <button class="checkout-button">Checkout</button>
      <button class="clear-cart-button">Clear Cart</button>
      </div>`
  } else return;
};
checkoutTotal();