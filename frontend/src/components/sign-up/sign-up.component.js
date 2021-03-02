
import react, {useState, useEffect} from 'react'
import './sign-up.style.scss'
import CustomButton from '../utils/custom-components/custom-button/custom-button.component'
import FormInput from '../utils/custom-components/form-input/form-input.component'
import {currentUserSelector} from '../../redux/user/user.selectors'
 import {createStructuredSelector} from 'reselect'
import {register, resetAuthError} from '../../redux/user/user.actions'
import {connect} from 'react-redux'


const SignUpForm = ( {register, resetAuthError, user}) => {
// const {userName, userEmail} = user
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPAssword] = useState('');
    const [nameError, setNameError ] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [addressError,setAddressError] = useState('')

    useEffect(() => {
        resetAuthError();

    }, [])


const handleFormValidation = () => {

    let isFormValid = true;
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(name < 2) {
        setNameError('please enter your name')
        isFormValid=false
    } else {
        setNameError('')
    }
    if(email==="" || !emailRegex.test(email)){
        setEmailError('please enter a valid email')
        isFormValid = false
    } else {
        setEmailError('')

    }
    
    if ( password<5 ){
        setPasswordError('please enter a password with five character minimum')
        isFormValid = false
    } else {
        setPasswordError('')
    }
    if( password!==repeatPassword){
        setPasswordError("password did not  match")
        isFormValid = false
    } else {
        setPasswordError('')
    }

    return isFormValid
}

const onSubmit = (e) => {
    e.preventDefault();
    const isFormValid = handleFormValidation();
    if(!isFormValid){
        return
    } else {
      register({name, email, password})
    }

}

return(
    <form>
        <FormInput 
        type='text'
        name='name'
        value={name}
        onChange={setName}
        label='name'
        error={nameError}/>

        
        <FormInput 
        type='email'
        name='email'
        value={email}
        onChange={setEmail}
        label='email'
        error={emailError}/>
        
        <FormInput 
        type='password'
        name='password'
        value={password}
        onChange={setPassword}
        label='password'
        error={passwordError}/>
        
        <FormInput
        type='password'
        name='repeat password'
        value={repeatPassword}
        onChange={setRepeatPAssword}
        label='repeat password'
        error={passwordError}/>

        <FormInput
        type='text'
        name='phone number'
        value={phoneNumber}
        onChange={setPhoneNumber}
        label='phone number'
        error={setPhoneNumberError}/>

<FormInput
        type='text'
        name='address'
        value={address}
        onChange={setAddress}
        label='address'
        error={setAddressError}/>


        
        <CustomButton onClick={onSubmit} inverted>sign in</CustomButton>
    </form>
)
}

const mapStateToProps  = createStructuredSelector({
    user : currentUserSelector
})

export default connect(
    mapStateToProps,
    {register, resetAuthError}
)
(SignUpForm)
