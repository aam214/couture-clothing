let total = document.getElementById("total");
let cartSaved =document.getElementById("cart-saved");


let cart = JSON.parse(localStorage.getItem("amount")) || [ ] ;

let calculation = () => {
  let cartIcon = document.getElementById("amount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


let generateSavedItems = ()=>{
  if(cart.length !==0){
    console.log("Items are in cart!");
  }else{
cartSaved.innerHTML =``;
total.innerHTML = `
 <div class="cart-message">Cart is Empty!</div>
 <a href="index.html" class="home-button" title="Back to Homepage">Back to Home</a>
 `;
  }

};
generateSavedItems();