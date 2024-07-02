let signInForm = document.getElementById('sign');

signInForm.addEventListener('submit', function(event){
    //create FormData object for loginForm
    let fd = new FormData(event.target);
    //check if form is validated or not
        //check if username exists in the local storage
        let userData = localStorage.getItem(fd.get("email"));
        let isLoginSuccesssful = true;
        if(userData == null){
            //you are here means username doesn't exists
            isLoginSuccesssful = false;
        }else{
            //convert the userData to the object from String type
            userData = JSON.parse(userData)
            if(userData["password"] != signInForm.password.value){
                //you are here means password is incorrect
                isLoginSuccesssful = false;
            }
        }
        if(!isLoginSuccesssful){
            //you are here means username and password mismatched
            alert("Invalid username or password");
            event.preventDefault();
        }else{
            //you are here means username and password are valid
            alert("Login Successful");
            //write the name of logged in user to localstorage for the key 'loggedInUser'
            localStorage.setItem('loggedInUser', userData["email"]);
            window.location.href = "/home.html";
            //load a new page that is login protected and display some name of user there
            

        }
    
    event.preventDefault();
});