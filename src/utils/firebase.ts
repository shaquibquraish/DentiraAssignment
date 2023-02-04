import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from  'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDM_iBKVuzJX-bBRuQ_ovi6Zh7hc9BnTOA",
  authDomain: "taskmanagement-46c25.firebaseapp.com",
  databaseURL:"https://taskmanagement-46c25-default-rtdb.firebaseio.com/",
  projectId: "taskmanagement-46c25",
  storageBucket: "taskmanagement-46c25.appspot.com",
  messagingSenderId: "994858552580",
  appId: "1:994858552580:web:310fc52d29729c6ef69451",
  measurementId: "G-S9MMKYXDTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseDB = getDatabase(app);

