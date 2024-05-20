const cart = JSON.parse(localStorage.getItem("amount")) || [ ] ;

let calculation = () => {
  let cartIcon = document.getElementById("amount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
