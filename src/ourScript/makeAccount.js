"use strict";

let confirmButton = document.getElementById("confirmButton");


confirmButton.onclick = function(){
    let username = document.forms["signupInfo"]["username"].value;
    let password1 = document.forms["signupInfo"]["password"].value;
    let password2 = document.forms["signupInfo"]["cpassword"].value;

    let usernameExist = false;
    let passwordIsEqual = false;


    if(password1 == password2){
        passwordIsEqual = true;
    }else{
        alert("Please make sure you entered the same password.");
    }

    for(var i = 0; i < arrayInfo.length; i++){
        if(arrayInfo[i][0] == username){
            usernameExist = true;
        }
    }
    //check if username is already exist in the database
    if((passwordIsEqual == true) &&(usernameExist == false)){
        //var usercount = firebase.database().val();
        var database = firebase.database();
        var encodedImg = database.ref("user");
        var encodedImg2 = database.ref("userCount");
        var result = encodedImg.push({
            username :username,
            password :password1,
            coins : '0'
        });
        var countResult = encodedImg2.push({
            count: 0
        });
    }else{
        alert("This email already exist.");
    }

    var timer = setTimeout(function(){
        if((passwordIsEqual == true) &&(usernameExist == false)){
            alert("You have sucessfully created your account!")
            location.replace("../ourWebPage/userPage.html");
        }
    },300);





};
