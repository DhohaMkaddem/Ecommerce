import React from 'react'
import './user-cart.style.scss'
import {connect} from 'react-redux'
import {logout} from '../../redux/user/user.actions'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {currentUserSelector} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import CustomButton from '../utils/custom-components/custom-button/custom-button.component'

const UserCart =({logout, history, user}) => {
    const signOut = () => {
        logout();
history.push('/home')
    }
    
    return(
    <div className='user-cart'>
        <span>bonjour {user.name}!</span>

        <Link to='/users/edit'> compte </Link>

         <CustomButton onClick={signOut}>
           logout  </CustomButton>
    </div>
    
    )
}
const mapDispatchToProps = dispatch => ({
logout : ()=>dispatch(logout())
})

const mapStateToProps = createStructuredSelector({
    user: currentUserSelector
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCart))


