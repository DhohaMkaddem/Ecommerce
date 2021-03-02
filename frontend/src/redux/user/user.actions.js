import axios from 'axios'
import jwt_decode from 'jwt-decode'
import userActionsTypes from './user.types'

import setAuthToken from '../../utils/auth'

//login
export const login = (userInfo, history) => async (dispatch)=>{

    try {
     
        const { data } = await axios.post('/users/login', userInfo);
        
        localStorage.setItem('authToken', data.token);
        setAuthToken(data.token)
        const decoded = jwt_decode(data.token);

        dispatch(setCurrentUser(decoded))
         dispatch(resetAuthError())
        history.push('/home')
    } catch (error) {
       
        dispatch({
            type : userActionsTypes.SET_AUTH_ERROR,
            payload:"Incorrect email or password"
        })
    }
}
//register new user
export const register = (userInfo, history) => async (dispatch) => {
    try {

        const {data} = await axios.post('/users/', userInfo );
        localStorage.setItem('authToken', data.token);
        setAuthToken(data.token)
        const decoded = jwt_decode(data.token)
        dispatch(setCurrentUser(decoded))
         dispatch(resetAuthError())
        history.push('/home')
    } catch (error) {
        if(error.response.data.includes("duplicate key")){
            dispatch({
                type: userActionsTypes.SET_AUTH_ERROR,
                payload: "email already used"
            })
        }
    }
};

// edit user

export const editUser = (userInfo, history) => async (dispatch) => {

    try {
        const {data} = await axios.patch("/", userInfo);
        localStorage.setItem('authToken', data.token);
        setAuthToken(data.token)
        const decoded = jwt_decode(data.token)
        dispatch(setCurrentUser(decoded))
         dispatch(resetAuthError())
history.push('/home')
    } catch (error) {
        if(error.response.data.includes("duplicate key")){
            dispatch({
                type: userActionsTypes.SET_AUTH_ERROR,
                payload: "email already used"
            })
        }
}
}

export const resetAuthError = () => ({
    type : userActionsTypes.SET_AUTH_ERROR,
    payload:""
})

export const setCurrentUser = (decoded) =>({
    type: userActionsTypes.SET_CURRENT_USER,
    payload: decoded
})

export const logout = () => (dispatch) => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    dispatch(setCurrentUser({}));
  };