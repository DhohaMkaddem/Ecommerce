import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



const PrivateRoute  = ({isAuthenticated, component: Component, ...otherProps}) => {
  return ( <Route
    {...otherProps}

    render = {(props) =>  isAuthenticated ? <Component {...props}/> : <Redirect to="/home"/>
}
/>)
}

const mapStateToProps = state =>({
    isAuthenticated : state.user.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)