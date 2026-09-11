// FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyClDk3wP2j2TcQjvAVnMGiLHLB-Pgh6OBQ",
  authDomain: "nesty-16e1c.firebaseapp.com",
  projectId: "nesty-16e1c",
  storageBucket: "nesty-16e1c.firebasestorage.app",
  messagingSenderId: "938726002441",
  appId: "1:938726002441:web:1f7787f459548f1749cdd8",
  measurementId: "G-FZ8EY0JKYG"
};

// INITIALIZE FIREBASE
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// PASSWORD TOGGLE
function togglePassVisibility(inputId, eyeBtn){
  let input = document.getElementById(inputId);
  if(input.type === "password"){
    input.type = "text";
    eyeBtn.innerText = "🙈";
  } else {
    input.type = "password";
    eyeBtn.innerText = "👁️";
  }
}

// ERROR DISPLAY HELPERS
function showError(msg){
  let errBox = document.getElementById('authError');
  if(errBox){
    errBox.innerText = msg;
    errBox.style.display = 'block';
  }
}

function clearError(){
  let errBox = document.getElementById('authError');
  if(errBox){
    errBox.innerText = '';
    errBox.style.display = 'none';
  }
}