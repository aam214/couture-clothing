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
  <div class="card-header">
  ${search.name}
  </div>
  <div class="card-body">
  <div class="x"><i class="fa-solid fa-x"></i></div>
  <img src =${search.img} width= "200" class= "ms-4 img-fluid rounded shadow ms-3"/>
    <h5 class="card-title"></h5>
    <p class="card-text">$${price}</p>
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