import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


const PublicRoute = ({isAuthenticated, component: Component, ...otherProps}) => {
    return(
    <Route
    {...otherProps}
    render = {(props) => isAuthenticated ? <Redirect to='/home'/> : <Component {...props}/>}
/>)
}

const mapStateToProps = state => ({
    isAuthenticated : state.user.isAuthenticated
})

export default connect(mapStateToProps)(PublicRoute)