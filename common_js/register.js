let innerwrapper = document.getElementById("inner-wrapper");



let instruct = document.createElement('h2');
instruct.className = "instruct";
instruct.innerText = "Let’s start. This account is for someone who is..."
innerwrapper.appendChild(instruct);

let btns = document.createElement('div');
    btns.className = "btns";
    btns.innerHTML ='<a class="linkButton" id ="under"><span>Under 16</span></a> <a class="linkButton" id ="over"><span>16 or Over</span></a>';
    innerwrapper.appendChild(btns);

    // adding event listner for 16 or less age user

    const under16 = document.getElementById("under");
    under16.addEventListener('click',function(){
        instruct.innerText = "Sorry, only 16s and over can register outside the UK";
        btns.innerHTML ='<a class="linkButton" id ="goback"><span>Okay</span></a>';
        let goback = document.getElementById('goback');

        goback.addEventListener('click',function(){
        window.location.reload();
         })
    })

    

const over = document.getElementById('over');
over.addEventListener('click' ,function(){
    window.location.href ="/Common_js/dobForm.html";
})

    


