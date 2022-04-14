import React, { useState, Fragment } from "react";
import { Card, Menu, Form, Button } from "semantic-ui-react";

import Home from "../../pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Favorites from "../../pages/Favorites/Favorites";
import UserProfile from "../../pages/UserProfile/UserProfile";
import Settings from "../../pages/Settings/Settings";
import RecipePage from "../../pages/Home/RecipePage";

import { auth } from "../../firebase";

import "./AuthForm.css";

async function authenticateUser(email, password, isLogin) {
  try {
    const user = isLogin
      ? await auth.signInWithEmailAndPassword(email, password)
      : await auth.createUserWithEmailAndPassword(email, password);
    console.log("After login", user);
  } catch (err) {
    console.log(err);
  }
}

//orignial name was renderLoggedIn swapped with authform to bypass authentication
function renderLoggedIn() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/userProfile" element={<UserProfile />} />
          <Route exact path="/settings/*" element={<Settings />} />
          <Route exact path="/recipepage/:id" element={<RecipePage />} />
        </Routes>
      </Router>
      <div>
        <Button className="logout-button" onClick={() => auth.signOut()} color="black">
          Log out
        </Button>
      </div>
    </div>
  );
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  auth.onAuthStateChanged((user) => setUser(user));

  return (
    <div>
      {user ? (
        renderLoggedIn()
      ) : (
        <div className="auth-form-wrapper">
        <Card className="auth-form-card">
          <Card.Content>
            <Fragment>
              <Card.Header className="auth-form-header">
                APP<font>etite</font>
              </Card.Header>
              <Card.Header className="paragraph-line">
                Browse 300+ unique recipes of different cuisines.
              </Card.Header>
              <Menu compact secondary>
                <Menu.Item
                  name="Login"
                  onClick={() => setIsLogin(true)}
                  active={isLogin}
                ></Menu.Item>
                <Menu.Item
                  name="Sign up"
                  onClick={() => setIsLogin(false)}
                  active={!isLogin}
                ></Menu.Item>
              </Menu>
              {isLogin ? (
                <Fragment>
                  <Form>
                    <Form.Field className="auth-form-fields">
                      <label className="form-labels">Email</label>
                      <input
                        placeholder="Email Address"
                        name="loginEmail"
                        type="email"
                        value={loginEmail || ""}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      ></input>
                    </Form.Field>
                    <Form.Field className="auth-form-fields">
                      <label className="form-labels">Password</label>
                      <input
                        placeholder="Password"
                        name="loginPassword"
                        type="password"
                        value={loginPassword || ""}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      ></input>
                    </Form.Field>
                    <Button
                      onClick={() =>
                        authenticateUser(loginEmail, loginPassword, true)
                      }
                      className="auth-form-buttons"
                      color="black"
                    >
                      Login
                    </Button>
                  </Form>
                </Fragment>
              ) : (
                <Fragment>
                  <Form>
                    <Form.Field className="auth-form-fields">
                      <label className="form-labels">Email</label>
                      <input
                        placeholder="Email Address"
                        name="signUpEmail"
                        type="email"
                        value={signupEmail || ""}
                        onChange={(e) => setSignupEmail(e.target.value)}
                      ></input>
                    </Form.Field>
                    <Form.Field className="auth-form-fields">
                      <label className="form-labels">Password</label>
                      <input
                        placeholder="Password"
                        name="signUpPassword"
                        type="password"
                        value={signupPassword || ""}
                        onChange={(e) => setSignupPassword(e.target.value)}
                      ></input>
                    </Form.Field>
                    <Button
                      className="auth-form-buttons"
                      color="black"
                      onClick={() =>
                        authenticateUser(signupEmail, signupPassword, false)
                      }
                    >
                      Sign up
                    </Button>
                  </Form>
                </Fragment>
              )}
            </Fragment>
          </Card.Content>
        </Card>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
