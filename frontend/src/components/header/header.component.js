import React from 'react'

import {Link} from 'react-router-dom'




const Header = () => {
    return(
    <div className='header'>
        <Link className='option' to='/'>HOME</Link>
        
<Link className='option' to='/users/login'>LOGIN</Link>

    </div>)

}

export default Header;