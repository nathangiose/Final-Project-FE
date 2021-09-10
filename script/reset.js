function show_password() {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    let y = document.getElementById("confirm");
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
}

function resetPass(){
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let confirm = document.querySelector('#confirm').value;

    fetch(`https://serene-hamlet-94464.herokuapp.com/reset-password/${username}`, {
        method:'PUT',
        body: JSON.stringify({
            password:password
        }),
        headers:{
            'Content-Type':'application/json'
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    if (password != confirm){
        alert('Passwords Do Not Match')
    }
    else {
        alert('Your password has been reset, successfully')
        console.log(username, password, confirm);
    }
  });
}