let products = []
fetch("https://serene-hamlet-94464.herokuapp.com/get-products/")
      // Convert data from JSON
      .then((res) => res.json())
      //Stuff to do with data
      .then((data) => {
        // Console log to make sure I am getting the data
      console.log(data);
      products = data.data;
      showProductList(products);
      // let productContainer = document.querySelector('.shop-items')
      // productContainer.innerHTML = "";
      // data['data'].forEach(product => {
      })

function showProductList(products) {
  fetch("https://serene-hamlet-94464.herokuapp.com/get-products/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    let view = document.querySelector(".show-items");
      data.data.forEach((item) => {
        view.innerHTML += `<div class="container" type=${item.type}>
          <img class="info image" src="${item[6]}" alt="image"/>
          <h3 class="info">${item[1]}</h3>
          <p class="info">${item }</p>
          <p class="info"><strong>${item[4]}</strong></p>
          <button onclick="loginUser(${item[0]})"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
          </div>`;
      
        });
});

}


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

function loginUser(){
 alert('You need to login to make a purchase');
 window.location = './login.html'
}