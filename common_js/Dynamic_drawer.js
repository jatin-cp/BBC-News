// creating div 

const menubar = document.createElement('div');
menubar.className = "menubar";
menubar.id = "menubar";

//content inside mennubar div
var sub_menubar = document.createElement('div');
sub_menubar.className = "sub_menubar";
sub_menubar.id = "sub_menubar";
menubar.appendChild(sub_menubar);

//content inside sub_mennubar div
var searchbarDiv = document.createElement("div");
searchbarDiv.className = "searchBar";
sub_menubar.appendChild(searchbarDiv);

//content inside searchbarDiv div
var searchbarinDiv = document.createElement("div");
searchbarinDiv.className = "searchBarin";
searchbarDiv.appendChild(searchbarinDiv);

// creating input tag 

var SearchInput = document.createElement("input");
SearchInput.type = "text";
SearchInput.placeholder = "Search News,Topics and More";
searchbarinDiv.appendChild(SearchInput);

var searchButton = document.createElement("button");
searchButton.className = "searchButton";
searchButton.id = "searchButton";
searchbarinDiv.appendChild(searchButton);
searchButton.innerHTML = '<span><svg viewBox="0 0 32 32" width="1em" height="1em" category="actions" icon="search" class="sc-1097f7fe-0 jmthjj"><path d="m30.6 28.1-8.3-8.3c1.5-2 2.4-4.4 2.4-7.2C24.7 6 19.6 1 13 1S1.4 6.1 1.4 12.7 6.5 24.3 13 24.3c2.3 0 4.4-.6 6.2-1.8l8.5 8.5 2.9-2.9zM4 12.6c0-5.2 3.9-9.1 9-9.1s9 3.9 9 9.1c0 5.2-3.9 9.1-9 9.1s-9-3.9-9-9.1z"></path></svg></span>';

//search bar end here

//making array for all tab elements

const tabElements = ["home","News","Sports","Buisness","Innovation","Culture","Travel","Earth","Video","Live","Audio","Weather","Newsletters"];
const links = ["/home.html","/news/news.html","#","/buisness/buisness.html","/innovation/innovation.html","/culture/culture.html","/travel/travel.html","/earth/earth.html","/live/live.html"]

// using for each method to genrate tabs

tabElements.forEach(function(currentvalue){
    const newTabWrapperDiv = document.createElement('div');
    newTabWrapperDiv.className = "TabWrapperDiv";
    sub_menubar.appendChild(newTabWrapperDiv);
    //code to create a tag inside tabWrapper
    let tabLink = document.createElement('a');
    tabLink.href = links[tabElements.indexOf(currentvalue)];
    tabLink.className ='tabLink';
    newTabWrapperDiv.appendChild(tabLink);

    let tabButton = document.createElement('button');
    tabButton.className ='tabButton';
    tabLink.appendChild(tabButton);


    let span = document.createElement('span');
    span.innerHTML = currentvalue;
    tabButton.appendChild(span);
})


//append new div to the body
document.body.appendChild(menubar);




Header_button.addEventListener('click',function(){
    document.getElementById('menubar').classList.toggle('showMenubar');
    document.getElementById('dullButton').classList.toggle('showMenubar');
    document.body.classList.toggle('overflowHide')
})