var pointer = firebase.database().ref().child("user");

var arrayInfo = [];
var numberOfUsers = 0;

// Retrieve new posts as they are added to our database
pointer.on("child_added", snap =>{
    var user = snap.child('username').val();
    var coins = snap.child('coins').val();
    var password = snap.child('password').val();
    var packAge = [user, password, coins];
    arrayInfo.push(packAge);
    numberOfUsers ++;
});
