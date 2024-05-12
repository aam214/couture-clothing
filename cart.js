let total = document.getElementById("total");
let CartSaved =document.getElementById("cart-saved");


let cart = JSON.parse(localStorage.getItem("amount")) || [ ] ;

let calculation = () => {
  let cartIcon = document.getElementById("amount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


let generateSavedItems = ()=> {
  if(cart.length !==0){
 return (CartSaved.innerHTML= cart.map((x) =>{

return `
<h2 class="cart-filled">Hello</h2>
`;
 }).join(""));
  }else{
CartSaved.innerHTML= ``;
total.innerHTML = `
 <div class="cart-message">Cart is Empty!</div>
 <a href="index.html" class="home-button" title="Back to Homepage">Back to Home</a>
 `;
  }

};
generateSavedItems();