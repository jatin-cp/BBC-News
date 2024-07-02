const form = document.getElementById('Register');


form.addEventListener('submit',function(event){
    

    let emailInput = document.getElementById('emailInput').value;
    let passwordInput = document.getElementById('passwordInput').value;

    let user = { email : emailInput , password : passwordInput};

    function checkemailAvail(){
        if(localStorage.getItem(emailInput) != null){
            return false;
        }
        return true;
    }
    if(checkemailAvail(email)){
        localStorage.setItem(user['email'] ,JSON.stringify(user));
        alert("Login Successful");
        window.location.href = "/home.html";
        
    }else{
        alert("Email is already registered");
    }
    



    
    event.preventDefault();
})

document.getElementById('showPass').addEventListener('click', function(event){
    let passwordInput = document.getElementById('passwordInput');
    let currentType = passwordInput.getAttribute('type');
    if(currentType == "password"){
    passwordInput.setAttribute('type',"Text");
    }else{
        passwordInput.setAttribute('type',"password");
    }
    event.preventDefault();
})

