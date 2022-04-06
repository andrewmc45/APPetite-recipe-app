import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyCRULSCsLZnHBgXgT2fcAB05caQ00mvihE",
  authDomain:"recipe-app-49dc4.firebaseapp.com",
  projectId:"recipe-app-49dc4",
  storageBucket:"recipe-app-49dc4.appspot.com",
  messagingSenderId:"565440754911",
  appId:"1:565440754911:web:0f6765da684b9d61f1656a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
