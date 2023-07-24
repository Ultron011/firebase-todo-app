import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDF8vfu-Y8TsekBwS-8ghEykodxVl25Qrc",
  authDomain: "fir-to-do-9cd40.firebaseapp.com",
  projectId: "fir-to-do-9cd40",
  storageBucket: "fir-to-do-9cd40.appspot.com",
  messagingSenderId: "86153193729",
  appId: "1:86153193729:web:15a0a0ee28293f9c051300"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);