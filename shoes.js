let shoes = document.getElementById('shoes');
const cart = JSON.parse(localStorage.getItem("amount")) || [] ;


let generateShoes = () =>{
return (shoes.innerHTML = shoesItemsData.map ((x)=>{ 
let {id, name, price, img} =x;
let search = cart.find((x)=>x.id===id) || [];
return `
<div id=product-id-${id} class="card">
<img src=${img} class="img-fluid rounded shadow" alt="Tops">
<div class="card-body">
<p class="card-text">${name} </p>
    <div class="cost">
    <span>$ ${price} </span>
    <span class="quantity">
    <i class="fa-solid fa-minus" onClick="decrement(${id})"></i>
    <span id=${id} class="number">${search.item===undefined? 0 : search.item}</span>
    <i class="fa-solid fa-plus" onClick="increment(${id})"></i>
    </span>
    </div>
    <div class="click">Add to cart</div>
    </div>
    </div>`;
    })
  .join(""));
  };
    
  generateShoes(); 
      
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
    localStorage.setItem("amount",JSON.stringify(cart));
    };
    
    let update = (id)=>{
      let search =cart.find((x) =>x.id=== id);
      document.getElementById(id).innerHTML =search.item;
    calculation();
    };
    
    let calculation = () => {
      let cartIcon = document.getElementById("amount");
      cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
    };
    
    calculation();
    