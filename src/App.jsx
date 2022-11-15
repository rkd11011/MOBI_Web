import React, { useEffect } from "react";
import Main from "./Main";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Receipt from "./Receipt";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import GateUse from "./GateUse";
import GateAuth from "./GateAuth";

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
        <Route path="/" element={<Main />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/gateuse" element={<GateUse />} />
        <Route path="/gateauth" element={<GateAuth />} />
      </Routes>
    </div>
  );
}

export default App;
