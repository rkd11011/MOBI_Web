import React, {useEffect} from 'react';
import './App.css';
import Main from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import Receipt from "./Receipt";
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Gate from './Gate';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect( () => {
    auth.onAuthStateChanged((authUser) => {
        if (authUser){
            dispatch(login({
                uid: authUser.uid,
                photo: authUser.photoURL,
                displayName: authUser.displayName,
                email: authUser.email
            }))
        } else {
            dispatch(logout())
        }
    })
}, [dispatch])


  return (
    <div className="App">
      {
        user ? (<Navbar/>):(<Login/>)
      }

    <Switch>
      <Route path="/home">
        <Main />
      </Route>

      <Route path="/receipt">
        <Receipt />
      </Route>

      <Route path="/gate">
        <Gate/>
      </Route>

    </Switch>
    </div>
  );
}

export default App;