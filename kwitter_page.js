//YOUR FIREBASE LINKS
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

username = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name1 = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      name1_with_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'></h4>";
      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value = " + like + "onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
      row = name1_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("Click on the likke button" + message_id);
      button_id = message_id;
      likes = document.getElementById("button_id").value;
      updated_likes = Number(likes + 1);
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location.replace("index.html");
}