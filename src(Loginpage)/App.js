import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";
import './script.js'
import {Helmet} from "react-helmet";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

 
  return (
    <div className="App">
    <Helmet>{`
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='./script.js>
    </script>
    `}
    </Helmet>
<div className="login-page">
  <div className="form">
    <form className="register-form">
      <input 
        type="text" 
        placeholder="Email..."
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
        />
      <input 
        type="password" 
        placeholder="password"
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}/>
      <button onClick={register}>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className="login-form">
      <input 
        type="text" 
        placeholder="username"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}/>
      <input 
        type="password" 
        placeholder="password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}/>
      <button onClick={login}>login</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </form>
  </div>
</div>
    </div>
  );
}

export default App;
