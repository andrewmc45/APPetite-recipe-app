import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxMznNX9ua_qagDCd_fNztkj48U5I4i_k",
  authDomain: "recipe-app-8392e.firebaseapp.com",
  projectId: "recipe-app-8392e",
  storageBucket: "recipe-app-8392e.appspot.com",
  messagingSenderId: "694186116664",
  appId: "1:694186116664:web:a69d54f43daf3b5d2d08cd",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
