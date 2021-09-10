function show_password() {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
 const mystorage = window.localStorage;
function login(){
    let username = document.querySelector('#username').value;
    let password = document.querySelector("#password").value;
    console.log(username, password)

    fetch("https://serene-hamlet-94464.herokuapp.com/user-login/",{
        method: 'POST',
        body: JSON.stringify({
            username:username,
            password:password
        }),
        headers: {
            'Content-Type':'application/json'
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        if (!res.data) {
            mystorage.setItem("username", document.getElementById('username').value)
            alert('Incorrect Username Or Password');
            window.location.href = 'product.html'
        }
        else{
            mystorage.setItem("username", document.getElementById('username').value);
            window.location.href = 'product.html'
        }
    })
}