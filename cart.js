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
let search = mergedArray.find((x) => x.id === id) || [];
let { img, price, name } = search;
return `
<div class="summary">
<div class="card">
  <div class="card-header">
  ${search.name}
  </div>
  <div class="card-body">
  <div class="x"><i class="fa-solid fa-x"></i></div>
  <img src =${search.img} width= "200" class= "ms-4 img-fluid rounded shadow ms-3"/>
    <h5 class="card-title"></h5>
    <p class="card-text">$${search.price}</p>
    <span class="quantity">
    <i class="fa-solid fa-minus" onClick="decrement(${id})"></i>
    <span id=${id} class="number">${item}</span>
    <i class="fa-solid fa-plus" onClick="increment(${id})"></i>
    </span>
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
  let search =cart.find((x) =>x.id=== id);
  document.getElementById(id).innerHTML =search.item;
  calculation();
  };
  