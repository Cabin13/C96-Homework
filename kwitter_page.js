var firebaseConfig = {
    apiKey: "AIzaSyCvZm3PoPmlccyCTaH_k8f6DCZXV1WyI5o",
    authDomain: "kwitter-286b4.firebaseapp.com",
    databaseURL: "https://kwitter-286b4-default-rtdb.firebaseio.com",
    projectId: "kwitter-286b4",
    storageBucket: "kwitter-286b4.appspot.com",
    messagingSenderId: "997121643713",
    appId: "1:997121643713:web:1e26b1a03c5f7ab6fbb040"
  };

  firebase.initializeApp(firebaseConfig);

  var username= localStorage.getItem("username")
  var roomName= localStorage.getItem("roomName")

  function send() {
    var msg= document.getElementById("msg").value;
    firebase.database().ref(roomName).push ({
          username: username,
          roomName: roomName,
          likes: 0
    })
    document.getElementById("msg").innerHTML= " "
  }
