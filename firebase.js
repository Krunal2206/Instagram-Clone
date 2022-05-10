import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCzBe2JvDFP3c1COfelzIRmcpYS09gOi2U",
    authDomain: "instagram-clone-ecb2e.firebaseapp.com",
    projectId: "instagram-clone-ecb2e",
    storageBucket: "instagram-clone-ecb2e.appspot.com",
    messagingSenderId: "1014410393469",
    appId: "1:1014410393469:web:15f34b267b48f743adbe14",
    measurementId: "G-RX3BHRT36J"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };