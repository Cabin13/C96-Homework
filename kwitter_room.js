var firebaseConfig = {
    apiKey: "AIzaSyBwj01eGcCAasy3Ws9PeMjy_xQcK_PmVPU",
    authDomain: "kwitter-homework-4f2bb.firebaseapp.com",
    databaseURL: "https://kwitter-homework-4f2bb-default-rtdb.firebaseio.com",
    projectId: "kwitter-homework-4f2bb",
    storageBucket: "kwitter-homework-4f2bb.appspot.com",
    messagingSenderId: "266075384083",
    appId: "1:266075384083:web:0b3c67ff35c522b62312e6"
  };
  
  firebase.initializeApp(firebaseConfig);

  var username= localStorage.getItem("username")
  document.getElementById("user_name").innerHTML= "Welcome " + username

  function add_room() {
    var room_name= document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({
      roomName: "roomName"
    })
    localStorage.setItem("roomName", room_name)
    window.location= "kwitter_page.html"
  }

  function getData() {
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
var row= '<div class="room_name" id="Room_names" onclick="redirectToRoomName(this.id)"># ' + Room_names + '</div> <hr>'
document.getElementById("output").innerHTML+= row
});
});
}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("roomName", name)
  window.location= "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("username")
  localStorage.removeItem("roomName")
  window.location= "index.html"
}