/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBTYorc22_eFhMMKFwlv5Fx_paD-7rJun0",
  authDomain: "shieldmaestro.firebaseapp.com",
  databaseURL: "https://shieldmaestro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shieldmaestro",
  storageBucket: "shieldmaestro.firebasestorage.app",
  messagingSenderId: "281861178512",
  appId: "1:281861178512:web:b8ad33d06dfbf929788415",
  measurementId: "G-244529JH6W"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}