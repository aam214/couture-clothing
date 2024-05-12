let cart = JSON.parse(localStorage.getItem("amount")) || [] ;

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
 
cartIcon.innerHTML =cart.map((x)=> x.item).reduce((x,y)=> x+y,0);
};

calculation();