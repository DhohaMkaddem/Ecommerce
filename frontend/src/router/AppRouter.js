import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginForm from '../components/login/login.component'
import SignInSignUp from '../pages/sign-in-sign-up/sign-in-sign-up.compenent'
import SignUpForm from '../components/sign-up/sign-up.component'
import Home from '../pages/home-page/home.component'
import Header from '../components/header/header.component'
import PublicRoute from '../router/PublicRoute'
import PrivateRoute from '../router/PrivateRoute'
const AppRouter  = () => {
    return(
    <Router>
    <Header/>
    <Switch>
    <Route exact path='/home' Component={Home}/>
    <PublicRoute path='/users/login' component={LoginForm}/>
    <PublicRoute exact path='/users/' component={SignInSignUp}/>
    <PrivateRoute path='/users/edit' component={SignUpForm}/>
    </Switch>
    </Router>)
}

export default AppRouter