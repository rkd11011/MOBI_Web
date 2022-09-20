import React, { useEffect } from "react";
import "./App.css";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Receipt from "./Receipt";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Gateuse from "./Gateuse";
import Gateauth from "./Gateauth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? <Navbar /> : <Login />}

      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/gateuse" element={<Gateuse />} />
        <Route path="/gateauth" element={<Gateauth />} />
      </Routes>
    </div>
  );
}

export default App;
