
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAQY5t0S6Qf49n0e5p6qtpGByBNYvfTgDY",
      authDomain: "kwitter-1d119.firebaseapp.com",
      databaseURL: "https://kwitter-1d119-default-rtdb.firebaseio.com",
      projectId: "kwitter-1d119",
      storageBucket: "kwitter-1d119.appspot.com",
      messagingSenderId: "1029006607485",
      appId: "1:1029006607485:web:27e1c8f69f10ba34b79d14"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name+ "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"trying to understand how database works"
      });
     localStorage.setItem("room_name",room_name);

     window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name - ",Room_names);
row = "<div class='room_name' id= "+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}