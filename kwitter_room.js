

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDRbgzic7RCQoup0EvBgJUADoy9Z-h7MCg",
  authDomain: "lakshan-s-chatbot-bror.firebaseapp.com",
  databaseURL: "https://lakshan-s-chatbot-bror-default-rtdb.firebaseio.com",
  projectId: "lakshan-s-chatbot-bror",
  storageBucket: "lakshan-s-chatbot-bror.appspot.com",
  messagingSenderId: "420498382061",
  appId: "1:420498382061:web:b252044a2bc52f3be900e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({ 
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
