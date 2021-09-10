function show_password() {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function register(){
    let first_name = document.querySelector('#first_name').value;
    let last_name = document.querySelector('#last_name').value;
    let address = document.querySelector('#address').value;
    let email = document.querySelector('#email').value;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    fetch('https://serene-hamlet-94464.herokuapp.com/user-registration/', {
        method:'POST',
        body: JSON.stringify({
            first_name:first_name,
            last_name:last_name,
            address:address,
            email:email,
            username:username,
            password:password,
        }),
        headers:{
            'Content-Type':'application/json'
        },
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        if (res['message'] == 'Invalid Email Address') {
            alert('Email Adress Not Valid "' + document.querySelector('#email').value+'"');
        }

        else if (res['message'] == 'ID Number Invalid') {
            alert('ID Number Not Valid')
        }
        else if (res['message'] == 'This username has been taken') {
            alert('Sorry, Username "'+document.querySelector('#username').value+'" Has Been Taken')
        }
        else {
            alert('You Are Registered \n An Email Has Been Sent With Your Username and Password Information')
            window.location = './login.html'
        }
    })
}