import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginForm from '../components/login/login.component'
import SignInSignUp from '../pages/sign-in-sign-up/sign-in-sign-up.compenent'
import Home from '../pages/home-page/home.component'
import Header from '../components/header/header.component'
import PublicRoute from '../router/PublicRoute'
const AppRouter  = () => {
    return(
    <Router>
    <Header/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/users/login' component={LoginForm}/>
    <PublicRoute path='/users' component={SignInSignUp}/>
    </Switch>
    </Router>)
}

export default AppRouter