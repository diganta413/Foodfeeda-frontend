import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDsWEtXiNnVJgDYsqn7-PrQbc0dg_dn5oM",
    authDomain: "foodfeeda-6699d.firebaseapp.com",
    projectId: "foodfeeda-6699d",
    storageBucket: "foodfeeda-6699d.appspot.com",
    messagingSenderId: "536238627787",
    appId: "1:536238627787:web:8e293fd7e9c2b7272bb44e",
    measurementId: "G-Z4L0YNNXZK",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
