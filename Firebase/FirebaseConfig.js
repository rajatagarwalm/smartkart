import { firebase } from "@react-native-firebase/firestore";
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6-pFsmXM5X7_1UVpBYFnmAidhSgxN4Y8",
    authDomain: "smartkart-37e6d.firebaseapp.com",
    projectId: "smartkart-37e6d",
    storageBucket: "smartkart-37e6d.appspot.com",
    messagingSenderId: "450142502397",
    appId: "1:450142502397:web:7aeddf24fb8b450e03ad94"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
