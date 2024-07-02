const header  = document.getElementById('header');

let Mainheader = document.createElement('div');
Mainheader.className = 'Main_header';
header.appendChild(Mainheader);

//constent inside main header div
let Three_bar = document.createElement('div');
Three_bar.className = 'Three_bar';
Mainheader.appendChild(Three_bar);

const Header_button = document.createElement('button');
Header_button.className = 'Header_button';
Header_button.innerHTML = '<svg viewBox="0 0 32 32" width="20" height="20" category="actions" icon="list-view-text" class="jmthjj"><path d="M1 7.5h30V1.9H1v5.6zm0 22.6h30v-5.6H1v5.6zm0-11.3h30v-5.6H1v5.6z"></path></svg>';
Three_bar.appendChild(Header_button);

let Search_button = document.createElement('button');
Search_button.className = 'Header_button Search_button';
Search_button.innerHTML = 'svg viewBox="0 0 32 32" width="20" height="20" category="actions" icon="search" class="jmthjj"><path d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"></path></svg>';
Three_bar.appendChild(Header_button);

// three_bar div closed

//bbc logo

let BBC_logo = document.createElement('div');
BBC_logo.className = 'BBC_logo';
Mainheader.appendChild(BBC_logo);

let BBC_logo_inner = document.createElement('div');
BBC_logo_inner.className = 'BBC_logo_inner';
BBC_logo.appendChild(BBC_logo_inner);


let logodiv = document.createElement('div');
BBC_logo_inner.appendChild(logodiv);


let HeaderLogo = document.createElement('a');
HeaderLogo.className = 'HeaderLogo';
HeaderLogo.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 32" category="logo" icon="bbc" style="height:30px" class="jbvZzi"><title>British Broadcasting Corporation</title><path d="M111.99999,4.44444577e-05 L111.99999,32.0000444 L79.9999905,32.0000444 L79.9999905,4.44444577e-05 L111.99999,4.44444577e-05 Z M72.0000119,-3.55271368e-15 L72.0000119,32 L40.0000119,32 L40.0000119,-3.55271368e-15 L72.0000119,-3.55271368e-15 Z M32,-3.55271368e-15 L32,32 L-1.13686838e-13,32 L-1.13686838e-13,-3.55271368e-15 L32,-3.55271368e-15 Z M97.469329,6.80826869 C96.0294397,6.80826869 94.7294393,7.02226876 93.5693278,7.44982444 C92.4089942,7.87782457 91.4137717,8.49471364 90.5841047,9.30049166 C89.7538823,10.1067141 89.1188821,11.07327 88.6785486,12.199937 C88.2378818,13.3269373 88.0177706,14.5896043 88.0177706,15.9876048 C88.0177706,17.4188274 88.2296596,18.7062722 88.6531042,19.8493837 C89.0763265,20.9929396 89.6861045,21.9591621 90.482438,22.748829 C91.2784383,23.5383848 92.2522163,24.1430516 93.4042167,24.5624962 C94.5558837,24.9819408 95.8516619,25.1917186 97.2914401,25.1917186 C98.3752182,25.1917186 99.4086629,25.072163 100.391219,24.8338296 C101.37333,24.5956073 102.237108,24.2706072 102.982664,23.8592738 L102.982664,23.8592738 L102.982664,20.4292727 C101.40733,21.4001619 99.6881074,21.8851621 97.8251069,21.8851621 C96.6054399,21.8851621 95.567884,21.6549398 94.7126615,21.194273 C93.8572168,20.7338284 93.2049944,20.0633837 92.7564387,19.1831613 C92.3073275,18.3032721 92.0831052,17.2380496 92.0831052,15.9876048 C92.0831052,14.7377155 92.3156608,13.6766041 92.7816609,12.8044927 C93.2474389,11.9327147 93.916328,11.2664922 94.7888838,10.8058254 C95.6609951,10.3453809 96.715551,10.1148252 97.9521069,10.1148252 C98.8496628,10.1148252 99.7052186,10.2342697 100.518108,10.4726031 C101.331219,10.7112699 102.084664,11.0609366 102.779442,11.5212701 L102.779442,11.5212701 L102.779442,8.01738016 C102.017219,7.62260227 101.191441,7.32260218 100.302219,7.11671323 C99.4129963,6.91126872 98.4685515,6.80826869 97.469329,6.80826869 Z M55.7552388,7.00000208 L49.0000146,7.00000208 L49.0000146,25.0000021 L56.1713501,25.0000021 C57.590906,25.0000021 58.8063508,24.7903407 59.8181289,24.3706739 C60.8297959,23.9513405 61.6087961,23.3553403 62.1555741,22.5832289 C62.7020187,21.8114509 62.9754632,20.8882284 62.9754632,19.8140059 C62.9754632,18.7232278 62.6941298,17.7960053 62.1312407,17.0321162 C61.5681294,16.2686715 60.7563514,15.7104491 59.6957955,15.3580046 C60.4625736,14.9891156 61.0420182,14.4894488 61.4335738,13.8601152 C61.8252406,13.2307817 62.0210185,12.4881148 62.0210185,11.6321146 C62.0210185,10.1385586 61.4742405,8.99311379 60.3812402,8.19578022 C59.2877954,7.39889109 57.745795,7.00000208 55.7552388,7.00000208 L55.7552388,7.00000208 Z M15.7552269,7.00000208 L9.00000268,7.00000208 L9.00000268,25.0000021 L16.1713381,25.0000021 C17.5908941,25.0000021 18.8062278,24.7903407 19.8182281,24.3706739 C20.8296729,23.9513405 21.6087842,23.3553403 22.1555621,22.5832289 C22.7021179,21.8114509 22.9755624,20.8882284 22.9755624,19.8140059 C22.9755624,18.7232278 22.6941179,17.7960053 22.1311177,17.0321162 C21.5682286,16.2686715 20.7563395,15.7104491 19.6957836,15.3580046 C20.4625616,14.9891156 21.0418952,14.4894488 21.4335619,13.8601152 C21.8252287,13.2307817 22.0210066,12.4881148 22.0210066,11.6321146 C22.0210066,10.1385586 21.4741175,8.99311379 20.3811172,8.19578022 C19.2877835,7.39889109 17.7457831,7.00000208 15.7552269,7.00000208 L15.7552269,7.00000208 Z M55.8775833,17.2209385 C58.1128062,17.2209385 59.2308065,18.0434943 59.2308065,19.6881614 C59.2308065,20.4602728 58.9369175,21.0518285 58.3496951,21.4629397 C57.7622505,21.8743843 56.9216947,22.0797177 55.8286944,22.0797177 L55.8286944,22.0797177 L52.6469157,22.0797177 L52.6469157,17.2209385 Z M15.8775714,17.2209385 C18.1129054,17.2209385 19.2307946,18.0434943 19.2307946,19.6881614 C19.2307946,20.4602728 18.9370167,21.0518285 18.3496832,21.4629397 C17.7622386,21.8743843 16.9216828,22.0797177 15.8286825,22.0797177 L15.8286825,22.0797177 L12.6469038,22.0797177 L12.6469038,17.2209385 Z M55.412572,9.92028073 C57.3541282,9.92028073 58.3252396,10.6338365 58.3252396,12.0600591 C58.3252396,12.7988371 58.0763506,13.373504 57.5786838,13.7846152 C57.0807948,14.1960598 56.3587946,14.4013932 55.412572,14.4013932 L55.412572,14.4013932 L52.6469046,14.4013932 L52.6469046,9.92028073 Z M15.4125601,9.92028073 C17.3541163,9.92028073 18.3252277,10.6338365 18.3252277,12.0600591 C18.3252277,12.7988371 18.0762276,13.373504 17.5786719,13.7846152 C17.0807829,14.1960598 16.3587826,14.4013932 15.4125601,14.4013932 L15.4125601,14.4013932 L12.6468927,14.4013932 L12.6468927,9.92028073 Z"></path></svg>';
logodiv.appendChild(HeaderLogo);

// code for register and signIn button
let Header_third = document.createElement('div');
Header_third.className = 'Header_third';
Mainheader.appendChild(Header_third);

let Register_div = document.createElement('div');
Register_div.className = 'Register_div';
Header_third.appendChild(Register_div);


let RegiButton = document.createElement('button');
RegiButton.className = 'RegiButton headButtons';
RegiButton.type = 'button';
RegiButton.ariaLabel = 'Register'
RegiButton.innerHTML ='<span class="hvowur">Register</span>'
Register_div.appendChild(RegiButton);

let SignINButton = document.createElement('button');
SignINButton.className = 'SignINButton headButtons';
SignINButton.type = 'button';
SignINButton.ariaLabel = 'Sign In'
SignINButton.innerHTML ='<span class="hvowur">Sign In</span>'
Register_div.appendChild(SignINButton);

//header ends here 

//nav starts here

const navSec = document.getElementById('navSec');

let navSection = document.createElement('nav');
navSection.className = 'navSection';
navSec.appendChild(navSection);

let HeadNavUl = document.createElement('ul');
HeadNavUl.className = 'HeadNavUl';
navSection.appendChild(HeadNavUl);

let pagelinks = [
    {name : "Home" , url : "/home.html"},
    {name : "News" , url : "/news/news.html"},
    {name : "Sport" , url : "/sports/sports.html"},
    {name : "Business" , url : "/buisness/buisness.html"},
    {name : "Innovation" , url : "/innovation/innovation.html"},
    {name : "Culture" , url : "/culture/culture.html"},
    {name : "Travel" , url : "/travel/travel.html"},
    {name : "Earth" , url : "/earth/earth.html"},
    {name : "Live" , url : "/live/live.html"},
];

pagelinks.forEach(link => {
    let HeadNavUlList = document.createElement('li');
    HeadNavUlList.className = "HeadNavUlList";
    let Headlil_link = document.createElement('a');
    Headlil_link.className = "Headlil_link";
    Headlil_link.innerText = link.name;
    Headlil_link.href = link.url;
    HeadNavUlList.appendChild(Headlil_link);
    HeadNavUl.appendChild(HeadNavUlList);

}
)

RegiButton.addEventListener('click',function(e){
    window.location.href ="/common_js/re.html";
    e.preventDefault();
})
SignINButton.addEventListener('click',function(e){
    window.location.href ="/common_js/signin.html";
    e.preventDefault();
})






