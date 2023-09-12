// Import Firebase SDK
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRK7Um8cfTpCgeEtBMFV3M5j0EsfrJljI",
    authDomain: "toggle-led-buttons.firebaseapp.com",
    databaseURL: "https://toggle-led-buttons-default-rtdb.firebaseio.com",
    projectId: "toggle-led-buttons",
    storageBucket: "toggle-led-buttons.appspot.com",
    messagingSenderId: "535193917364",
    appId: "1:535193917364:web:12aa607ab6fb7b8df544e1",
    measurementId: "G-K4DKGC7R08"
  };

firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

// Reference to the LED control states
const led1Ref = database.ref('led1');
const led2Ref = database.ref('led2');
const led3Ref = database.ref('led3');

// Function to toggle the LED state
function toggleLED(ledRef) {
  ledRef.once('value', (snapshot) => {
    const currentValue = snapshot.val();
    // Toggle the LED state
    ledRef.set(!currentValue);
  });
}

// Listen for changes in the LED states
led1Ref.on('value', (snapshot) => {
  const ledValue = snapshot.val();
  // Update the UI or perform actions based on the LED state (LED 1)
  if (ledValue) {
    // LED 1 is ON
    document.getElementById('ledStatus1').textContent = 'LED 1 is ON';
  } else {
    // LED 1 is OFF
    document.getElementById('ledStatus1').textContent = 'LED 1 is OFF';
  }
});

led2Ref.on('value', (snapshot) => {
  const ledValue = snapshot.val();
  // Update the UI or perform actions based on the LED state (LED 2)
  if (ledValue) {
    // LED 2 is ON
    document.getElementById('ledStatus2').textContent = 'LED 2 is ON';
  } else {
    // LED 2 is OFF
    document.getElementById('ledStatus2').textContent = 'LED 2 is OFF';
  }
});

led3Ref.on('value', (snapshot) => {
  const ledValue = snapshot.val();
  // Update the UI or perform actions based on the LED state (LED 3)
  if (ledValue) {
    // LED 3 is ON
    document.getElementById('ledStatus3').textContent = 'LED 3 is ON';
  } else {
    // LED 3 is OFF
    document.getElementById('ledStatus3').textContent = 'LED 3 is OFF';
  }
});

// Attach click event listeners to buttons in your HTML
document.getElementById('toggleButton1').addEventListener('click', () => toggleLED(led1Ref));
document.getElementById('toggleButton2').addEventListener('click', () => toggleLED(led2Ref));
document.getElementById('toggleButton3').addEventListener('click', () => toggleLED(led3Ref));
