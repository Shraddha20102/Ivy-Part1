
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD6xiY8kM-I-1Yk7Z-SgusGZDDcv_ORO-Q",
      authDomain: "ivyleague-28a44.firebaseapp.com",
      databaseURL: "https://ivyleague-28a44-default-rtdb.firebaseio.com",
      projectId: "ivyleague-28a44",
      storageBucket: "ivyleague-28a44.appspot.com",
      messagingSenderId: "43365757839",
      appId: "1:43365757839:web:86f24a37ff9f84fe0751fa",
      measurementId: "G-95V2TWNG2N"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    
      //End code
      });});}
getData();
