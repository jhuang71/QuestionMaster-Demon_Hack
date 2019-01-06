"use strict";
let loginButton = document.getElementById("loginButton");
loginButton.onclick = function(){
    let username = document.forms["loginInfo"]["username"].value;
    let password = document.forms["loginInfo"]["password"].value;
    //check if username and password is correct
    let usernameCheck = false;
    let passwordCheck = false;

    for(var i = 0; i < arrayInfo.length; i++){
        if(arrayInfo[i][0] == username){
            usernameCheck = true;
            if(arrayInfo[i][1] == password){
                passwordCheck = true;
            }
        }
    }
    // then log in and redirect to the home page
    if((usernameCheck == true) && (passwordCheck == true)){
        location.replace("userPage.html");
    }else{
        alert("Invalid username or password. Please Try Again.");
    }

};
