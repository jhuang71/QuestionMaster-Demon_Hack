"use strict";

let confirmButton = document.getElementById("confirmButton");
confirmButton.onclick = function(){
    let username = document.forms["signupInfo"]["username"].value;
    let password1 = document.forms["signupInfo"]["password"].value;
    let password2 = document.forms["signupInfo"]["cpassword"].value;

    let usernameExist = false;
    let passwordIsEqual = false;

    if(password1 == password2){
        console.log("same password");
        //if username doesnot exist and password is the same
        // we allow the user to create an account
    }
    //check if username is already exist in the database
    // make sure two passwords are the same

};
