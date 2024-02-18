const firebaseConfig = {
    apiKey: "AIzaSyDwBa0cJEyOeTeB0WWGMi1zaY2FXPCsJJ8",
    authDomain: "tweet-tweet-1daa0.firebaseapp.com",
    databaseURL: "https://tweet-tweet-1daa0-default-rtdb.firebaseio.com",
    projectId: "tweet-tweet-1daa0",
    storageBucket: "tweet-tweet-1daa0.appspot.com",
    messagingSenderId: "604790848159",
    appId: "1:604790848159:web:5825ee96f86ae9e78c80aa"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room);

          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStarage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}