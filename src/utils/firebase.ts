

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from  'firebase/database'

const firebaseConfigDev = {
    apiKey: "AIzaSyAsYPCUpVEtsKhs7THjfvKtfemzaCZ63vs",
    authDomain: "taskmanagementdev.firebaseapp.com",
    databaseURL:"https://taskmanagementdev-default-rtdb.firebaseio.com/",
    projectId: "taskmanagementdev",
    storageBucket: "taskmanagementdev.appspot.com",
    messagingSenderId: "984631756294",
    appId: "1:984631756294:web:615857ce0cf10f01e0a587",
    measurementId: "G-TPL101PV80"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfigDev);
const analytics = getAnalytics(app);

export const firebaseDB = getDatabase(app);

