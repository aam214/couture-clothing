let shop= document.getElementById("store");

let shopItemData= [{},{},{},{},{},{},{},{}]



let generateShop = ()=>{
  return (shop.innerHTML= `
    <main class="main-4-column">
    <div class="card">
      <img src="pictures/off-shoulder-dress.jpg" class="img-fluid rounded shadow" alt="Silk Dresses">
      <div class="card-body">
        <p class="card-text">Silk Dress<div><strong>$50.00</strong></div><div class="click">Add to cart</div></p>
      </div>
    </div>
  
    <div class="card" >
      <img src="pictures/sequin-dress.jpg"  class=" img-fluid rounded shadow" alt="Sequin Dress">
      <div class="card-body">
        <p class="card-text">Sequin Dress<div><strong>$99.00</strong></div><div class="click">Add to cart</div></p>
      </div>
    </div>
    <div class="card" >
      <img src="pictures/leather-jacket.jpg"class="img-fluid rounded shadow" alt="Casual Dress">
      <div class="card-body">
        <p class="card-text">Casual Dress<div><strong>$70.00</strong></div><div class="click">Add to cart</div></p>
      </div>
    </div>
    <div class="card">
      <img src="pictures/white-dress.jpg" class="img-fluid rounded shadow" alt="Silk Dresses">
      <div class="card-body">
        <p class="card-text">Summer Dress<div><strong>$58.00</strong></div><div class="click">Add to cart</div></p>
      </div>
    </div>
    <div class="card" >
      <img src="pictures/casual-dress.jpg"class="img-fluid rounded shadow" alt="Spring Dress">
      <div class="card-body">
        <p class="card-text">Spring Dress<div><strong>$40.00</strong></div><div class="click">Add to cart</div></p>
      </div>
    </div>
    <div class="card" >
      <img src="pictures/wedding.jpg"class="img-fluid rounded shadow" alt="Wedding Dress">
      <div class="card-body">
        <p class="card-text">Wedding Dress<div><strong>$570.00</strong></div><div class="click">Add to cart</div></p>
      </div>
    </div>
    <div class="card" >
      <img src="pictures/bridesmaid.jpg"class="img-fluid rounded shadow" alt="Formal Dress">
      <div class="card-body">
        <p class="card-text">Formal Dress<div><strong>$150.00</strong></div><div class="click">Add to cart</div></p>
      </div>
    </div>
    <div class="card" >
      <img src="pictures/red-oneshoulder.jpg"class="img-fluid rounded shadow" alt="Chiffon Dress">
      <div class="card-body">
        <p class="card-text">Chiffon Dress<div><strong>$90.00</strong></div><div class="click">Add to cart</div></p>
      </div> `
  )
}