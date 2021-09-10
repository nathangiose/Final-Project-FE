let products = []
const user = localStorage.getItem("username")

function getUser(){
    console.log(user)
    if (user == null){
     window.location = './login.html' 
    }
    else{
      document.querySelector('#greeting').innerHTML = `Hello, ${user}`
    }
}
getUser();

fetch("https://serene-hamlet-94464.herokuapp.com/get-products/")
      // Convert data from JSON
      .then((res) => res.json())
      //Stuff to do with data
      .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);
      products = data.data;
      showProductList(products);
      })

function showProductList(item) {
    let view = document.querySelector(".show-items");
    view.innerHTML = ''
      products.forEach((item) => {
        view.innerHTML += `<div class="container" type=${item.type}>
          <img class="info image" src="${item[6]}" alt="image"/>
          <h3 class="info">${item[1]}</h3>
          <p class="info">${item[2]}</p>
          <p class="info"><strong>${item[4]}</strong></p>
          <button class="btn" onclick="event.preventDefault(); addTocart(${item[0]})">Add to Cart</button>
          </div>`;
        });
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function productFilter(type){
    // Display All Types
    let productCards = document.querySelectorAll(".container");
    if (type == 'All') {
      for(let i = 0; i < productCards.length; i++){
        productCards[i].style.display = "flex"
    } 
    return;
    }

    // Get all cards and hide
    for(let i = 0; i < productCards.length; i++){
        productCards[i].style.display = "none"
    }

    // Get selected types to display
    let selectedProducts = document.querySelectorAll(`[type=${type}]`)
    for(let i = 0; i < selectedProducts.length; i++){
        selectedProducts[i].style.display = "flex"
    }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Add to Cart<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let cart = []
function addTocart(id){
  let product = products.find((item) =>{
    return item.id == id
  });
  if (user == null) {
    alert('You are not logged in')
    window.location = './login.html'
  }
  
  else {
  cart.push(product);
  console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart))
  let totalPrice = cart.reduce((total, item) => total + parseInt(item.price), .0);
  localStorage.setItem('total', JSON.stringify(totalPrice))
  console.log(totalPrice);
  }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function button(id) {
  document.querySelector(id).classList.toggle("active");
}

function toggleCart(){
  document.querySelector('#cart').classList.toggle('active')
}

function logOut(){
  if (confirm('Are you sure you want to log out?')){
    localStorage.removeItem('user')
    window.location = './index.html'
  }
  else {
    console.log('Logging Out Cancelled')
  }
}
