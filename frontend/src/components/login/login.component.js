import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {login, resetAuthError} from '../../redux/user/user.actions'
import FormInput from '../utils/custom-components/form-input/form-input.component'
import CustomButton from '../utils/custom-components/custom-button/custom-button.component'

const LoginForm = ({login, authError, history}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    
    useEffect(() => {
        resetAuthError();

    }, [])

    const handleFormValidation = () => {
       let isFormValid = true;
       const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       if(email==="" ||!emailRegex.test(email)){
           setEmailError('please enter a valid email')
           isFormValid = false
       } else {
           setEmailError('')
       } 
   
    if (password.length < 5) {
        setPasswordError("Please enter your password (at least 5 characters)");
        isFormValid = false;
      } else {
        setPasswordError("");
      }
      return isFormValid;
    };
    

    const onSubmit = (e) => {
        e.preventDefault();
        const isFormValid = handleFormValidation();
        if(!isFormValid){
            return
        } else {
            login({email, password}, history)
        }
    }

    return(
     
     
         
        <form>
            
            <FormInput
            type = 'email'
            name="email"
            label="Email"
             
            value={email}
            onChange ={setEmail}
            error={emailError}
            />
               <FormInput
            type = 'password'
            name="passowrd"
            label="Password"
        
             value={password}
            onChange={setPassword}
            error={authError || passwordError}
            />
            <CustomButton onClick={onSubmit} inverted>login</CustomButton>
          
        </form>
            
    )
}

const mapStateToProps = (state) => ({
    authError : state.user.authError
})

export default connect(mapStateToProps, {login, resetAuthError})(LoginForm);