import React from 'react';
import './App.scss'
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import auth from './utils/auth'
import {setCurrentUser} from "./redux/user/user.actions"
import AppRouter from './router/AppRouter'
// import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.compenent'



if(localStorage.authToken) {
  auth(localStorage.authToken);
  const decoded = jwt_decode(localStorage.authToken)
  setCurrentUser(setCurrentUser(decoded))
}

function App() {
  return (
    <div className="App">
<AppRouter/>
    </div>
  );
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser : decoded => dispatch(setCurrentUser(decoded))
})

export default connect(null, mapDispatchToProps)(App);

