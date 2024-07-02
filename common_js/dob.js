const Register = document.getElementById('Register');

Register.addEventListener('submit',function(event){
    const dayInput = document.getElementById('dayInput').value;
    const monthInput = document.getElementById('monthInput').value;
    const yearInput = document.getElementById('yearInput').value;
    const Birthdatestring = yearInput + "-" + monthInput + "-" + dayInput;
    

if(isageValid(Birthdatestring)){
}else{
    alert("Sorry, you need to be 16 or over.");
    SubmitEvent.preventDefault();
}
    function isageValid(Birthdatestring){
        const Birthdate = new Date(Birthdatestring);

        if(isNaN(Birthdate.getTime())){
            //code to handle invalid format
        }

        const today = new Date();

    // Calculate age (considering days since birth)
    const age = today.getFullYear() - Birthdate.getFullYear() - ((today.getMonth() < Birthdate.getMonth()) || (today.getMonth() === Birthdate.getMonth() && today.getDate() < Birthdate.getDate()));
    return age >= 16;
    }

    window.location.href ="/Common_js/emailform.html";
    event.preventDefault();
    

});

