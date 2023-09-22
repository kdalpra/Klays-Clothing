function changeImage(imageURL) {
    document.getElementById("productImage").src = imageURL;
}


function renderNav(){
    document.write(`
    
    <nav>
    <div class="navbar">
      <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
        <div class="menu-items">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">New Releases</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="success.html">My Order</a></li>
        </div>
      </div>
    </div>
  </nav>

<div class="navBar" style="text-align: center; padding-top: 40px; padding-bottom: 40px;">
    <nav>
        <ul style="list-style-type: none; margin: 0; padding: 0; display: inline-block;">
        <li class="dropdown1">
                <a class="navElem" href="index.html">Shop All</a>
                <div class="dropdown-content">
                    <a href="tees.html">Tees</a>
                    <a href="hoodies.html">Hoodies</a>
                    <a href="hats.html">Hats</a>
                    <a href="tanks.html">Tanks</a>
                </div>
                
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a href="index.html" class="navElem">New Releases</a>
                <div class="dropdown-content">
                    <a href="boilermaker.html">Boilermaker</a>
                </div>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li style="display: inline;">
                <a class="navElem" href="about.html">About Us</a>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a class="navElem" href="contact.html">Contact</a>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a class="navElem" href="success.html">My Order</a>
            </li>
        </ul>
    </nav>
 </div>
 `);
}
function renderNavProducts(){
    document.write(`
    
    <nav>
    <div class="navbar">
      <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
        <div class="menu-items">
          <li><a href="../index.html">Home</a></li>
          <li><a href="../index.html">New Releases</a></li>
          <li><a href="../about.html">About Us</a></li>
          <li><a href="../contact.html">Contact</a></li>
          <li><a href="../success.html">My Order</a></li>
        </div>
      </div>
    </div>
  </nav>

<div class="navBar" style="text-align: center; padding-top: 40px; padding-bottom: 40px;">
    <nav>
        <ul style="list-style-type: none; margin: 0; padding: 0; display: inline-block;">
        <li class="dropdown1">
        <a class="navElem" href="../index.html">Shop All</a>
        <div class="dropdown-content">
            <a href="../tees.html">Tees</a>
            <a href="../hoodies.html">Hoodies</a>
            <a href="../hats.html">Hats</a>
            <a href="../tanks.html">Tanks</a>
        </div>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a href="../index.html" class="navElem">New Releases</a>
                <div class="dropdown-content">
                    <a href="../boilermaker.html">Boilermaker</a>
                </div>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li style="display: inline;">
                <a class="navElem" href="../about.html">About Us</a>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a class="navElem" href="../contact.html">Contact</a>
            </li>
            <li style="display: inline;">
                <a class="navElem">|</a>
            </li>
            <li class="dropdown1">
                <a class="navElem" href="success.html">My Order</a>
            </li>
        </ul>
    </nav>
 </div>
 `);
}


function updateBuyNowLink(newURL, updatedIMG, arrayOfNewIds) {
  document.getElementById("productIdForCart").innerHTML = " ";
    var buyNowBtn = document.getElementById('buyNowBtn');
    buyNowBtn.setAttribute('onclick', newURL);

    if(arrayOfNewIds.length == 1){
      document.getElementById("productIdForCart").innerHTML = arrayOfNewIds[0];
      changeImage(updatedIMG);
      return;
    }

    if(arrayOfNewIds.length > 0){
      document.getElementById("pId1").innerText = arrayOfNewIds[0];
      document.getElementById("pId2").innerText =  arrayOfNewIds[1];
      document.getElementById("pId3").innerText =  arrayOfNewIds[2];
      document.getElementById("pId4").innerText =  arrayOfNewIds[3];
      document.getElementById("sizeBtn").innerText = "SELECT SIZE";
    }
    changeImage(updatedIMG);
  }


function changeImageHover(element, imagePath) {
    element.src = imagePath;
  }





function sizingChange(){
  var elements = document.getElementsByClassName("sizingKlay");
  var button = document.getElementById("toggleButton");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].style.display === "none" || elements[i].style.display === "") {
      elements[i].style.display = "block";
      button.textContent = "˄ SIZE GUIDE";
    } else {
      elements[i].style.display = "none";
      button.textContent = "˅ SIZE GUIDE";
    }
  }
}


function addToCart(imgUrl){
  console.log('cart');

  if(document.getElementById("sizeBtn") !== null){
    if(document.getElementById("sizeBtn").innerHTML === "SELECT SIZE"){
      alert("Select a size");
      return;
    }
    var sizing = document.getElementById("sizeBtn").innerHTML;
  }
  else{
    var sizing = "";
  }
  
  let itemsStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
  var priceText = document.querySelector('.priceText');
  var price = priceText.textContent.trim();

  var h1Tag = document.querySelector('h1'); 
  var itemName = h1Tag.textContent.trim();

  var stripePId = document.getElementById("productIdForCart").innerHTML;
  console.log(stripePId.length);
  if(stripePId.length < 10 || typeof stripePId === "undefined"){
    console.log("here");
    alert("Select a size");
    return;
  }

  itemsStorage.push([imgUrl,stripePId,price, itemName,sizing]);
  localStorage.setItem("items", JSON.stringify(itemsStorage));
  location.replace("../cart.html");
}


function removeFromCart(imgUrl, prodId, price, itemName, sizing){
  let itemsStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
  
  const index = itemsStorage.indexOf([imgUrl,prodId,price,itemName,sizing]);
  let tupleIndex = itemsStorage.findIndex((tuple) => JSON.stringify(tuple) === JSON.stringify([imgUrl,prodId,price,itemName,sizing]));
  console.log(tupleIndex);

  if (tupleIndex > -1) {
    itemsStorage.splice(tupleIndex, 1);
    localStorage.setItem("items", JSON.stringify(itemsStorage));
  }
    location.reload();
}


function showCart(){
  let itemsStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

  itemsStorage.forEach((note) =>{
    document.write(`<div class="cartRow">
    <img alt="product image" class="cartImg" src="${note[0]}">
    <p class="cartItemName">${note[3]} ${note[4]}</p>
    <p class="cartPrice">${note[2]}</p>
    <button class="cartRemoveBtn" onclick="removeFromCart('${note[0]}', '${note[1]}', '${note[2]}', '${note[3]}', '${note[4]}')">X</button>
</div>`);
    console.log(note[0]);
  })
}


function totalCart(){
  let itemsStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
  let tempNum=0;
  itemsStorage.forEach(() =>{
    tempNum++;
  })
  if(tempNum == 0){
    document.write(`<p class="cartTotal"></p> `);
  }
  else{
    document.write(`<p class="cartTotal">${tempNum}</p> `);
  }
  
}



async function checkout(){
  let itemsStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
  let stripeIds = [];
  itemsStorage.forEach((item) =>{
    stripeIds.push({id: item[1], quantity: 1});
  }
  )
  if(stripeIds.length > 0){
    let loadingAnimation = document.getElementById('loadingAnimation');
    loadingAnimation.style.display = 'block'; 

    //checkout render.io link here *******************************************************************************
    await fetch('https://klayclothing.onrender.com/checkout', {
      method: 'POST', 
      headers: {
       'Content-Type': 'application/json',
        },
        body: JSON.stringify( {items: stripeIds}),
          }).then((response) => {
            return response.json();
              }).then((response) => {
                  if(response.url){
                  loadingAnimation.style.display = 'block';
                  localStorage.setItem("orderPlaced", "110");
                  window.location.assign(response.url);
                }
                else{
                  //error occurred making link
                  loadingAnimation.style.display = 'none';
                }
              });
  }
  else{
    console.log("");
  }
}


function showOrder(){
  let itemsStorage = localStorage.getItem("latestOrder")
  ? JSON.parse(localStorage.getItem("latestOrder"))
  : [];
  let orderName = JSON.parse(localStorage.getItem("orderName"));
  let orderPrice = JSON.parse(localStorage.getItem("orderPrice"));
  let priceNum = parseInt(orderPrice) /100;
  if(orderName === null){
    document.write(`
    <h1 class="cartLabel">No Order found.</h1>
  `);
    return;
  }
  document.write(`
  <h1 class="cartLabel">ORDER COMPLETE !</h1>
    <h1 class="cartLabel">THANK YOU</h1>
    <h1 class="cartLabel"> ${orderName} </h1>
    <h1 class="cartLabel2">YOUR ORDER TOTAL: $${priceNum}</h1>
  `);

  itemsStorage.forEach((note) =>{
    document.write(`
    <div class="cartRow">
    <img alt="product image" class="cartImg" src="${note[0]}">
    <p class="cartItemName">${note[3]} ${note[4]}</p>
    <p class="cartPrice">${note[2]}</p>
    
</div>`);
    console.log(note[0]);
  })
}


async function successOrder(){
  const urlParams = new URLSearchParams(window.location.search);
  const k9sessionId = urlParams.get("session_id");
  console.log(k9sessionId);

  let recentSId = localStorage.getItem("sesId")
  ? JSON.parse(localStorage.getItem("sesId"))
  : "";
  
  //if a success request of this session id has already been made and stored into memory
  if(recentSId === k9sessionId){
    return;
  }

  if(k9sessionId === null){
    return;
  }

  console.log("past if");
  //render io link here ******************************************************************************
  await fetch(`https://klayclothing.onrender.com/success?session_id=${k9sessionId}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.custName) {
        localStorage.setItem("sesId", JSON.stringify(k9sessionId));
        localStorage.setItem("orderName", JSON.stringify(response.custName));
        localStorage.setItem("orderPrice", JSON.stringify(response.ordPrice));
        moveCartToLatestOrder();
      } else {
        console.log("nothing");
      }
    });
}


function moveCartToLatestOrder(){
  let itemsStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
  localStorage.setItem("latestOrder", JSON.stringify(itemsStorage));
  location.reload();
}



function changeSizeSelect(sizeLbl){
  const sizeOrder = ["S", "M", "L", "XL"];
  const sizeIndex = sizeOrder.indexOf(sizeLbl);
  console.log(sizeIndex);
  document.getElementById("sizeBtn").innerText = sizeLbl;
  let pIds = [];
  pIds.push(document.getElementById("pId1").innerHTML);
  pIds.push(document.getElementById("pId2").innerHTML);
  pIds.push(document.getElementById("pId3").innerHTML);
  pIds.push(document.getElementById("pId4").innerHTML);
  document.getElementById("productIdForCart").innerText = pIds[sizeIndex];
  var dropdown = document.getElementById("sizeDropdown");
  dropdown.style.display = "none";
}


function changeRadio(radioId){
  var radioInput = document.getElementById(radioId);
  radioInput.checked = true;
  radioInput.dispatchEvent(new Event('change'));
}


function toggleOptions(){
  var dropdown = document.getElementById("sizeDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}


function chatButton(){
  const chatButtonContainer = document.querySelector('.chat-button-container');

  console.log('here');
  //document.querySelector('.chat-button')
    chatButtonContainer.classList.toggle('active');
}