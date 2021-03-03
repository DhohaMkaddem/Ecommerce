import React from 'react'

import './user-icon.style.scss'

import {ReactComponent as IconUser} from '../../assets/user-icon.svg'
import {connect} from 'react-redux'
import {toggleHidden} from '../../redux/user/user.actions'

const UserIcon = ({toggleHidden}) => {
   


    return(
        <div className="user-icon" onClick={()=>toggleHidden()}>
            <IconUser className='icon-user'/>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleHidden : ()=>dispatch(toggleHidden())
})
export default connect(null, mapDispatchToProps)(UserIcon) 