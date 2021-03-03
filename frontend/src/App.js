import React from 'react';
import './App.scss'
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import auth from './utils/auth'
import {setCurrentUser, logout} from "./redux/user/user.actions"
import AppRouter from './router/AppRouter'




if(localStorage.authToken) {
  auth(localStorage.authToken);
  const decoded = jwt_decode(localStorage.authToken)
  setCurrentUser(setCurrentUser(decoded))
  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    logout();
    window.location.href="/home"
  }
}

function App() {
  return (
    <div className="App">
<AppRouter/>
    </div>
  );
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser : decoded => dispatch(setCurrentUser(decoded)),
  logout : () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(App);

