import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyAgcTa_9fprc72HrX9FfFPE6jsNTzjxk0s",
  authDomain: "dairy-ccl.firebaseapp.com",
  projectId: "dairy-ccl",
  storageBucket: "dairy-ccl.appspot.com",
  messagingSenderId: "94969738248",
  appId: "1:94969738248:web:9145b4dd6ab85eb32b0dbd",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); // Connect to firebase project
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
