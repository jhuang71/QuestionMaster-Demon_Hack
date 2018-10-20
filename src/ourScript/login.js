"use strict";

let loginButton = document.getElementById("loginButton");
loginButton.onclick = function(){
    let username = document.forms["loginInfo"]["username"].value;
    let password = document.forms["loginInfo"]["password"].value;
    //check if username and password is correct
    // then log in and redirect to the home page
    location.replace("userPage.html");
};
