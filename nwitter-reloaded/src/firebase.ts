import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcy-8WLmOoLWHN-42D2US0Bq22V6BE_40",
  authDomain: "nwitter-reloaded-2d27a.firebaseapp.com",
  projectId: "nwitter-reloaded-2d27a",
  storageBucket: "nwitter-reloaded-2d27a.firebasestorage.app",
  messagingSenderId: "77105869602",
  appId: "1:77105869602:web:bcff8208271348b725eb7b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
