import React from 'react'

import LoginForm from '../../components/login/login.component'
import SignUpForm from '../../components/sign-up/sign-up.component'


const SignInSignUp = () => {
    return(
        <div className='sign-in-sign-up'>
            <LoginForm/>
            <SignUpForm/>
        </div>
    )
}

export default SignInSignUp