var firebaseConfig = {
      apiKey: "AIzaSyA53OjWXtvTV-8V-mnquDrT3rS6lmr7blE",
      authDomain: "kwitter-homework-23d40.firebaseapp.com",
      databaseURL: "https://kwitter-homework-23d40-default-rtdb.firebaseio.com",
      projectId: "kwitter-homework-23d40",
      storageBucket: "kwitter-homework-23d40.appspot.com",
      messagingSenderId: "235366432802",
      appId: "1:235366432802:web:4fcb9b802625939ddfca7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
      
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id);'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}